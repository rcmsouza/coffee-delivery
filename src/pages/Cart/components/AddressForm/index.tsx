import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  FormContainer,
  AddressHeader,
  AddressForm,
  PaymentContainer,
  PaymentHeader,
  PaymentMethods,
} from './styles'
import { TextInput } from '../../../../components/TextInput'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Radio } from '../../../../components/Radio'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CartContext } from '../../../../context/CartContext'

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP').max(8, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o estado'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function AddressFormComponent() {
  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      fullAddress: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
  })

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = addressForm

  const { cart, checkout } = useContext(CartContext)

  const cep = watch('cep')
  const paymentMethod = watch('paymentMethod')

  const [autocompleted, setAutocompleted] = useState(
    Boolean(cep && cep.toString().length === 8),
  )

  function handleSubmitForm(data: AddressFormData) {
    if (cart.length <= 0) {
      return alert('É necessário escolher um item ao menos')
    }

    checkout(data)
  }

  useEffect(() => {
    if (cep && cep.toString().length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            setAutocompleted(true)
            setValue('street', data.logradouro)
            setValue('neighborhood', data.bairro)
            setValue('city', data.localidade)
            setValue('state', data.uf)
          } else {
            setAutocompleted(false)
            setValue('street', '')
            setValue('neighborhood', '')
            setValue('city', '')
            setValue('state', '')
          }
        })
    } else {
      setAutocompleted(false)
    }
  }, [cep, autocompleted, setValue])

  return (
    <>
      <FormContainer>
        <AddressHeader>
          <MapPin size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AddressHeader>
        <form id="order" onSubmit={handleSubmit(handleSubmitForm)}>
          <AddressForm>
            <TextInput
              placeholder="CEP"
              containerProps={{ style: { gridArea: 'cep' } }}
              error={errors.cep}
              type="number"
              {...register('cep')}
            />
            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
              disabled={autocompleted}
              error={errors.street}
              {...register('street')}
            />
            <TextInput
              placeholder="Número"
              containerProps={{ style: { gridArea: 'number' } }}
              error={errors.number}
              type="number"
              {...register('number')}
            />
            <TextInput
              placeholder="Complemento"
              containerProps={{ style: { gridArea: 'fullAddress' } }}
              {...register('fullAddress')}
            />
            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              disabled={autocompleted}
              error={errors.neighborhood}
              {...register('neighborhood')}
            />
            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
              disabled={autocompleted}
              error={errors.city}
              {...register('city')}
            />
            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: 'state' } }}
              disabled={autocompleted}
              error={errors.state}
              {...register('state')}
            />
          </AddressForm>
        </form>
      </FormContainer>
      <PaymentContainer>
        <PaymentHeader>
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </PaymentHeader>
        <PaymentMethods>
          <Radio
            isSelected={paymentMethod === 'credit'}
            {...register('paymentMethod')}
            value="credit"
          >
            <CreditCard size={16} />
            <span>Cartão de Credito</span>
          </Radio>
          <Radio
            isSelected={paymentMethod === 'debit'}
            {...register('paymentMethod')}
            value="debit"
          >
            <Bank size={16} />
            <span>Cartão de Débito</span>
          </Radio>
          <Radio
            isSelected={paymentMethod === 'cash'}
            {...register('paymentMethod')}
            value="cash"
          >
            <Money size={16} />
            <span>Dinheiro</span>
          </Radio>
        </PaymentMethods>
      </PaymentContainer>
    </>
  )
}
