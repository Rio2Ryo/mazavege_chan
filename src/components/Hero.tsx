'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import CountdownTimer from '@/components/CountdownTimer'
import { useState, useEffect } from 'react'

const sdgGoals = [
  {
    number: '2',
    title: {
      JP: '飢餓をゼロに',
      EN: 'Zero Hunger',
    },
    image: '/images/E-WEB-Goal-02.webp',
  },
  {
    number: '11',
    title: {
      JP: '住み続けられるまちづくりを',
      EN: 'Sustainable Cities and Communities',
    },
    image: '/images/E-WEB-Goal-11.webp',
  },
  {
    number: '13',
    title: {
      JP: '気候変動に具体的な対策を',
      EN: 'Climate Action',
    },
    image: '/images/E-WEB-Goal-13.webp',
  },
  {
    number: '14',
    title: {
      JP: '海の豊かさを守ろう',
      EN: 'Life Below Water',
    },
    image: '/images/E-WEB-Goal-14.webp',
  },
]

export default function Hero() {
  const { t, language } = useLanguage()
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2025-11-11T11:00:00Z') // UTC time

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setCountdown('Launched!')
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateCountdown() // Initial update
    const interval = setInterval(updateCountdown, 1000) // Update every second

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToToken = () => {
    const element = document.getElementById('token')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-40 md:pb-8 md:pt-48 lg:pt-56">
        {/* Title Section - Single Component */}
        <div className="mb-12">

          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/mazavege_logo_midori.png"
              alt="Mother Vegetable Logo"
              width={140}
              height={140}
              className="mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              priority
            />
          </div>

          <div
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2))',
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <div>MOTHER VEGETABLE PROJECT</div>
            </h1>
          </div>

          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>

        </div>


        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-12 mt-16 px-4">
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '35億年前の地球のはじまりの植物',
                EN: 'The vegetable from 3.5 billion years ago'
              })}
            </p>
            <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '「マザーベジタブル」',
                EN: '"Mother Vegetable"'
              })}
            </p>
            <p className="text-lg md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '地球が生み出した生命力を、あなたに。',
                EN: 'Earth’s life force, for you.'
              })}
            </p>
          </div>
        </div>

         {/* SDGs */}
        <div className="relative left-1/2 w-[92vw] max-w-2xl -translate-x-1/2 px-2 sm:px-4">
          <p className="flex items-center justify-center gap-1.5 text-center font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-[#25C760]/90 sm:text-[11px]">
            <span aria-hidden="true">🌿</span>
            {t({
              JP: '持続可能な未来を育む',
              EN: 'Growing a Sustainable Future',
            })}
          </p>

          <ul className="mt-2.5 flex items-stretch justify-center gap-1.5 md:mt-3 md:gap-3">
            {sdgGoals.map((goal) => (
              <li
                key={goal.number}
                className="flex min-w-0 flex-1 basis-0 flex-col items-center rounded-[10px] border border-white/10 px-1.5 pb-2 pt-2.5 md:w-[104px] md:flex-none md:px-3 md:pb-2.5 md:pt-3 lg:w-[116px]"
              >
                <Image
                  src={goal.image}
                  alt={`SDG ${goal.number} — ${t(goal.title)}`}
                  width={128}
                  height={128}
                  className="h-8 w-8 shrink-0 rounded-[3px] md:h-9 md:w-9 lg:h-10 lg:w-10"
                />
                <span className="mt-1.5 hyphens-auto break-words text-center font-bricolage text-[10px] font-semibold leading-tight text-white/85 md:mt-2 md:text-[12px] lg:text-[13px]">
                  {goal.number === '13' && language === 'EN' ? (
                    <>Climate<br />Action</>
                  ) : t(goal.title)}
                </span>
                <span className="mt-auto pt-1 text-center font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-white/55 md:pt-1.5 md:text-[10px] md:tracking-[0.12em]">
                  SDG {goal.number}
                </span>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
  )
}
