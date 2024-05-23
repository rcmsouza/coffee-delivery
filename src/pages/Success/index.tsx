import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { InfoContainer, OrderInfoContainer, SuccessContainer } from './styles'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useParams } from 'react-router-dom'
import success from '../../assets/success.svg'

export function Success() {
  const { orders } = useContext(CartContext)

  console.log(orders)

  const { orderId } = useParams()

  const orderInfo = orders.find(
    (order) => order.id.toString() === orderId?.toString(),
  )

  const theme = useTheme()

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <OrderInfoContainer>
          <InfoContainer>
            <div>
              <MapPin
                color={theme.white}
                style={{ backgroundColor: theme['purple-500'] }}
                size={32}
                weight="fill"
              />
            </div>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {orderInfo?.street}, {orderInfo?.number}
                </strong>
              </span>
              <span>
                {orderInfo?.neighborhood} - {orderInfo?.city},{' '}
                {orderInfo?.state}
              </span>
            </div>
          </InfoContainer>
          <InfoContainer>
            <div>
              <Timer
                color={theme.white}
                style={{ backgroundColor: theme['yellow-500'] }}
                size={32}
                weight="fill"
              />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </InfoContainer>
          <InfoContainer>
            <div>
              <CurrencyDollar
                color={theme.white}
                style={{ backgroundColor: theme['yellow-800'] }}
                size={32}
                weight="fill"
              />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethod[orderInfo?.paymentMethod]}</strong>
            </div>
          </InfoContainer>
        </OrderInfoContainer>
        <img src={success} alt="" />
      </div>
    </SuccessContainer>
  )
}
