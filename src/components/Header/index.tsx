import { Aside, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={Logo} alt="Coffee Delivery" />
      </NavLink>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Carapicuíba, SP</span>
        </div>
        <NavLink to="/cart">
          <ShoppingCart size={22} weight="fill" />
          <span>{cart.length ?? 0}</span>
        </NavLink>
      </Aside>
    </HeaderContainer>
  )
}
