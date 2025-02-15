import Head from "next/head";
import { MdAccountCircle } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";


export default function Home() {
  return (
    <div className="bg-[#261b2b] w-screen h-screen flex flex-col">
      <Head>
        <title>Iphone 14 Pro</title>
        <meta name="description" content="Iphone 14 Pro Landing Page"></meta>
      </Head>

      <header className="navbar">
        <div className="logo">cyber</div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Blog</a></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer">
            <MdAccountCircle />
          </div>
          <div className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer">
            <CiShoppingCart />
          </div>
        </div>

      </header>

      <main className="content">
        <div className="text">
          <h1>Pro. Beyond.</h1>
          <h2>Iphone 14 Pro</h2>
          <p>Created to change everything for the better. For everyone.</p>

          <button>Shop Now</button>
        </div>

        <div className="iphone-image">
          <a href="#"> <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iphone-14-265x300.jpg?tr=q-100" alt="iphone" className="ipHone"></img></a>
        </div>
      </main>
    </div>
  )
}      
