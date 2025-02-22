import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
  const script = document.createElement("script");
    script.src = "countdown.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return (

   
  
    <div className="container">
      <Head>
        <title>How many years of hurt since the England mens football team won a major trophy?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="How many years of hurt since the England mens football team won a major trophy?" />
        <p className="description">
          Too bloody long.
        </p>

    <div class="countup" id="countup1">
      <span class="timeel years">00</span>
      <span class="timeel timeRefYears">years</span>
      <span class="timeel days">00</span>
      <span class="timeel timeRefDays">days</span>
      <span class="timeel hours">00</span>
      <span class="timeel timeRefHours">hours</span>
      <span class="timeel minutes">00</span>
      <span class="timeel timeRefMinutes">minutes</span>
      <span class="timeel seconds">00</span>
      <span class="timeel timeRefSeconds">seconds</span>
    </div>
      </main>

      <Footer />
    </div>
  )
}
