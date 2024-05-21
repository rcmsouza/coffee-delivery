import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import CoffeeCover from '../../assets/coffee-cover.svg'
import {
  CoffeeList,
  ContentContainer,
  ContentItems,
  HomeContainer,
  Title,
} from './styles'
import { Card } from '../../components/Card'
import { coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <HomeContainer>
        <ContentContainer>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Title>
          <ContentItems>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['yellow-800'] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['base-text'] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['yellow-500'] }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee
                size={32}
                weight="fill"
                color={theme.background}
                style={{ backgroundColor: theme['purple-500'] }}
              />
              <span>O café chega fresquinho até você</span>
            </div>
          </ContentItems>
        </ContentContainer>
        <img src={CoffeeCover} alt="" />
      </HomeContainer>
      <CoffeeList>
        <h1>Nossos cafés</h1>

        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeeList>
    </div>
  )
}
