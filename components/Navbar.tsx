import Link from 'next/link'
import Image from 'next/image'
import { Container } from '../styles/navbar'

export default function Navbar(){
    return (
        <Container>
            <div>
                <Image src='/images/pokeball.png' width='30' height='30' alt='PokeNext'/>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/about'><a>Sobre</a></Link>
                </li>
                <li>
                    <Link href='/favoritos'><a>Favoritos</a></Link>
                </li>
            </ul>
        </Container>
    )
}