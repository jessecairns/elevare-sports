import React from 'react';
import { Sparkles, Rocket, Telescope } from "lucide-react";

export type Language = 'en' | 'tr' | 'fr';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      network: "Network",
      team: "Our Team",
      contact: "Contact"
    },
    hero: {
      title: "TALENT",
      subtitle: "ELEVATED",
      description: "Guiding elite talent through every step of the journey with precision and vision.",
      explore: "Explore Network",
      vision: "Our Vision",
      badge: "Check out our stars"
    },
    about: {
      title: "ELEVARE IS A GLOBAL FOOTBALL AGENCY POWERING PLAYERS THROUGH DATA-DRIVEN DECISION-MAKING.",
      description: "We don’t just represent; we guide careers. Combining athlete intuition, lived experience, and strategic thinking, we stand by our players on and off the pitch.",
      readMore: "Read More",
      ticker: "Elevare Sports Management"
    },
    services: {
      title: "STRATEGIC",
      subtitle: "EXECUTION",
      items: [
        {
          title: "Representation",
          description: "We offer tailored guidance and governance on your career. Always reliable, notably inspiring."
        },
        {
          title: "Career Strategy",
          description: "We advise and handle contract negotiations and career transitions with precision."
        },
        {
          title: "Performance & Wellbeing",
          description: "Together with you, we identify your peak performance zones and ensure long-term wellbeing."
        },
        {
          title: "Financial & Legal Advisory",
          description: "We provide strategic guidance on investments and stand by you in all legal actions, ensuring your commercial interests and future are fully protected."
        },
        {
          title: "Brand & Image",
          description: "We build and manage your personal brand across social media and beyond, ensuring your identity reflects your performance and long-term vision."
        }
      ]
    },
    network: {
      title: "GLOBAL",
      subtitle: "FOOTPRINT",
      description: "With offices strategically located in 3 different countries, we provide premium services to our athletes through an extensive global network.",
      meetTeam: "Meet Our Team"
    },
    team: {
      title: "OUR",
      subtitle: "TEAM",
      description: "A multidisciplinary team of former athletes, licensed agents, and industry experts dedicated to elevating your career.",
      back: "Back",
      peopleBehind: "The People Behind",
      members: [
        {
          name: "UMUT",
          role: "Founder",
          bio: "Umut Vurdu is the founder of Elevare and leads the organization from the Istanbul office. With a background as a former footballer, he brings deep on-field experience combined with a strong educational approach, both at academy and professional levels.\n\nAs an educator by background, he has been actively coaching and mentoring players for years, focusing on long-term athlete development and performance. Alongside his work in football, he is an experienced business owner and executive in the construction industry.\n\nHis multidisciplinary background allows him to combine sporting insight, education, and leadership in building Elevare’s player-focused ecosystem.",
          experience: ["Global Lead (Istanbul Office)", "Former Footballer & Coach", "Construction Industry Executive"]
        },
        {
          name: "Baransel",
          role: "FIFA Licensed Agent",
          bio: "Baransel Soysal is based in Paris, operating primarily across Southern Europe and North Africa. He works within a strong international network, connecting talent with the right opportunities at the right time.\n\nHis background combines business development, project financing, and entrepreneurship, mainly in the tech sector, bringing a structured and strategic perspective to player management.\n\nOutside of football, he is a competitive sailor, reflecting the same discipline and performance mindset he brings to his work with athletes. He speaks Turkish, English, French, Italian, and Spanish.",
          experience: ["Paris-based Southern Europe & North Africa Lead", "Business Development & Project Financing", "Multilingual: TR, EN, FR, IT, ES"]
        },
        {
          name: "Yigit",
          role: "FIFA Licensed Agent",
          bio: "Yiğit Çavuşoğlu leads Elevare’s Northern Europe operations from the Amsterdam office. He operates across a strong European network, connecting players with the right clubs and opportunities.\n\nHis background spans international business environments, particularly in tech and logistics, bringing a structured and strategic approach to player development.\n\nHe has also built Elevare’s scouting and analytics systems, strengthening the organization’s data-driven decision-making.",
          experience: ["Northern Europe Operations Lead", "Scouting & Analytics Systems Designer", "International Business Expert"]
        }
      ]
    },
    portfolio: {
      title: "PLAYER",
      subtitle: "PORTFOLIO",
      description: "Our stars are currently being brought down from the skies.",
      subtext: "Stay tuned for the launch"
    },
    contact: {
      title: "Take the next step with us",
      button: "Let's Talk",
      modalTitle: "Get in",
      modalSubtitle: "Touch",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Your Message",
      placeholderFirstName: "Arda",
      placeholderLastName: "Güler",
      placeholderEmail: "arda@realmadrid.com",
      placeholderMessage: "How can we help you elevate your career?",
      send: "Send Message",
      offices: {
        istanbul: "Istanbul Office",
        paris: "Paris Office",
        amsterdam: "Amsterdam Office"
      },
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  },
  tr: {
    nav: {
      home: "ANA SAYFA",
      about: "HAKKIMIZDA",
      services: "HİZMETLER",
      network: "AĞIMIZ",
      team: "EKİBİMİZ",
      contact: "İLETİŞİM"
    },
    hero: {
      title: "TALENT",
      subtitle: "ELEVATED",
      description: "Seçkin yeteneklere yolculuklarının her adımında hassasiyet ve vizyonla rehberlik ediyoruz.",
      explore: "AĞIMIZI KEŞFEDİN",
      vision: "VİZYONUMUZ",
      badge: "YILDIZLARIMIZA GÖZ ATIN"
    },
    about: {
      title: "ELEVARE, VERİ ODAKLİ KARAR MEKANİZMALARİYLA OYUNCULARA GÜÇ VEREN KÜRESEL BİR FUTBOL AJANSIDIR.",
      description: "Sadece temsil etmiyoruz; kariyerleri yönetiyoruz. Sporcu sezgisini, yaşanmış tecrübeyi ve stratejik düşünceyi birleştirerek, oyuncularımızın hem saha içinde hem de saha dışında yanındayız.",
      readMore: "DEVAMINI OKU",
      ticker: "ELEVARE SPOR YÖNETİMİ"
    },
    services: {
      title: "STRATEJİK",
      subtitle: "UYGULAMA",
      items: [
        {
          title: "TEMSİLCİLİK",
          description: "Kariyerinizle ilgili size özel rehberlik ve yönetim sunuyoruz. Her zaman güvenilir, her zaman ilham verici."
        },
        {
          title: "KARİYER STRATEJİSİ",
          description: "Sözleşme müzakerelerini ve kariyer geçişlerini hassasiyetle yönetiyor ve danışmanlık yapıyoruz."
        },
        {
          title: "PERFORMANS VE REFAH",
          description: "Sizinle birlikte en yüksek performans bölgelerinizi belirliyor ve uzun vadeli refahınızı sağlıyoruz."
        },
        {
          title: "FİNANSAL VE HUKUKİ DANIŞMANLIK",
          description: "Yatırımlar konusunda stratejik rehberlik sağlıyor ve tüm hukuki süreçlerde yanınızda durarak ticari çıkarlarınızı ve geleceğinizi koruyoruz."
        },
        {
          title: "MARKA VE İMAJ",
          description: "Kişisel markanızı sosyal medyada ve ötesinde inşa ediyor, kimliğinizin performansınızı ve uzun vadeli vizyonunuzu yansıtmasını sağlıyoruz."
        }
      ]
    },
    network: {
      title: "KÜRESEL",
      subtitle: "ETKİ",
      description: "3 farklı ülkede stratejik olarak konumlanmış ofislerimizle, geniş küresel ağımız üzerinden sporcularımıza birinci sınıf hizmetler sunuyoruz.",
      meetTeam: "EKİBİMİZLE TANIŞIN"
    },
    team: {
      title: "BİZİM",
      subtitle: "EKİP",
      description: "Kariyerinizi yükseltmeye adanmış eski sporcular, lisanslı menajerler ve endüstri uzmanlarından oluşan multidisipliner bir ekip.",
      back: "GERİ",
      peopleBehind: "Arkadaki İsimler",
      members: [
        {
          name: "UMUT",
          role: "KURUCU",
          bio: "Umut Vurdu, Elevare'nin kurucusu; şirketi İstanbul ofisinden yönetiyor. Eski futbolcu olarak akademi ve profesyonel düzeyde sahada edindiği tecrübeyi, güçlü bir eğitmen bakış açısıyla bir araya getiriyor.\n\nYıllardır oyunculara koçluk ve mentorluk veriyor; uzun vadeli gelişim ve performansa odaklanıyor. Futbolun yanı sıra inşaat sektöründe deneyimli bir iş insanı ve yönetici.\n\nBu çok yönlü birikim, Elevare'nin oyuncu odaklı yapısını sportif içgörü, eğitim ve liderlikle birleştirmesine olanak tanıyor.",
          experience: ["Küresel Lider (İstanbul Ofisi)", "Eski Futbolcu ve Antrenör", "İnşaat Sektörü Yöneticisi"]
        },
        {
          name: "BARANSEL",
          role: "FIFA LİSANSLI MENAJER",
          bio: "Baransel Soysal, Paris merkezli olarak ağırlıklı olarak Güney Avrupa ve Kuzey Afrika bölgelerinde faaliyet göstermektedir. Güçlü bir uluslararası ağ içinde çalışarak yetenekleri doğru zamanda doğru fırsatlarla buluşturuyor.\n\nGeçmişi, teknoloji sektöründeki iş geliştirme, proje finansmanı ve girişimciliği birleştirerek oyuncu yönetimine yapılandırılmış ve stratejik bir bakış açısı getiriyor.\n\nFutbol dışında, sporcularla yaptığı çalışmalara getirdiği disiplin ve performans odaklı zihniyeti yansıtan rekabetçi bir yelkencidir. Türkçe, İngilizce, Fransızca, İtalyanca ve İspanyolca bilmektedir.",
          experience: ["Paris Merkezli Güney Avrupa ve Kuzey Afrika Sorumlusu", "İş Geliştirme ve Proje Finansmanı", "Çok Dilli: TR, EN, FR, IT, ES"]
        },
        {
          name: "YİĞİT",
          role: "FIFA LİSANSLI MENAJER",
          bio: "Yiğit Çavuşoğlu, Elevare'nin Kuzey Avrupa operasyonlarını Amsterdam ofisinden yönetmektedir. Güçlü bir Avrupa ağı üzerinden oyuncuları doğru kulüpler ve fırsatlarla buluşturuyor.\n\nGeçmişi, özellikle teknoloji ve lojistik alanlarındaki uluslararası iş ortamlarını kapsayarak oyuncu gelişimine yapılandırılmış ve stratejik bir yaklaşım getiriyor.\n\nAyrıca Elevare'nin scouting ve analitik sistemlerini kurarak organizasyonun veri odaklı karar verme mekanizmasını güçlendirmiştir.",
          experience: ["Kuzey Avrupa Operasyon Sorumlusu", "Scouting ve Analitik Sistem Tasarımcısı", "Uluslararası İş Uzmanı"]
        }
      ]
    },
    portfolio: {
      title: "OYUNCU",
      subtitle: "PORTFÖYÜ",
      description: "Yıldızlarımız şu anda gökyüzünden indiriliyor.",
      subtext: "LANSMAN İÇİN TAKİPTE KALIN"
    },
    contact: {
      title: "SIRADAKİ ADIMI BİRLİKTE ATALIM",
      button: "KONUŞALIM",
      modalTitle: "BİZE",
      modalSubtitle: "ULAŞIN",
      firstName: "ADINIZ",
      lastName: "SOYADINIZ",
      email: "E-POSTA ADRESİNİZ",
      message: "MESAJINIZ",
      placeholderFirstName: "Arda",
      placeholderLastName: "Güler",
      placeholderEmail: "arda@realmadrid.com",
      placeholderMessage: "Kariyerinizi yükseltmenize nasıl yardımcı olabiliriz?",
      send: "MESAJ GÖNDER",
      offices: {
        istanbul: "İSTANBUL OFİSİ",
        paris: "PARİS OFİSİ",
        amsterdam: "AMSTERDAM OFİSİ"
      },
      privacy: "Gizlilik Politikası",
      terms: "Şartlar ve Koşullar"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      network: "Réseau",
      team: "Notre Équipe",
      contact: "Contact"
    },
    hero: {
      title: "TALENT",
      subtitle: "ELEVATED",
      description: "Guider les talents d'élite à chaque étape de leur parcours avec précision et vision.",
      explore: "Explorer le Réseau",
      vision: "Notre Vision",
      badge: "Découvrez nos stars"
    },
    about: {
      title: "ELEVARE EST UNE AGENCE DE FOOTBALL MONDIALE QUI REVISE LES JOUEURS GRÂCE À UNE PRISE DE DÉCISION BASÉE SUR LES DONNÉES.",
      description: "Nous ne nous contentons pas de représenter ; nous guidons des carrières. Alliant intuition d'athlète, expérience vécue et réflexion stratégique, nous accompagnons nos joueurs sur et en dehors du terrain.",
      readMore: "En Savoir Plus",
      ticker: "Elevare Sports Management"
    },
    services: {
      title: "EXÉCUTION",
      subtitle: "STRATÉGIQUE",
      items: [
        {
          title: "Représentation",
          description: "Nous offrons des conseils et une gouvernance sur mesure pour votre carrière. Toujours fiable, particulièrement inspirant."
        },
        {
          title: "Stratégie de Carrière",
          description: "Nous conseillons et gérons les négociations de contrats et les transitions de carrière avec précision."
        },
        {
          title: "Performance et Bien-être",
          description: "Ensemble, nous identifions vos zones de performance maximale et assurons votre bien-être à long terme."
        },
        {
          title: "Conseil Financier et Juridique",
          description: "Nous fournissons des conseils stratégiques sur les investissements et vous accompagnons dans toutes les actions juridiques, protégeant vos intérêts commerciaux et votre avenir."
        },
        {
          title: "Marque et Image",
          description: "Nous construisons et gérons votre marque personnelle sur les réseaux sociaux et au-delà, en veillant à ce que votre identité reflète vos performances et votre vision à long terme."
        }
      ]
    },
    network: {
      title: "EMPREINTE",
      subtitle: "MONDIALE",
      description: "Avec des bureaux stratégiquement situés dans 3 pays différents, nous fournissons des services premium à nos athlètes grâce à un vaste réseau mondial.",
      meetTeam: "Rencontrez l'Équipe"
    },
    team: {
      title: "NOTRE",
      subtitle: "ÉQUIPE",
      description: "Une équipe multidisciplinaire d'anciens athlètes, d'agents licenciés et d'experts de l'industrie dédiés à l'élévation de votre carrière.",
      back: "Retour",
      peopleBehind: "Les visages derrière",
      members: [
        {
          name: "UMUT",
          role: "Fondateur",
          bio: "Umut Vurdu a fondé Elevare et pilote l'organisation depuis le bureau d'Istanbul. Ancien footballeur, il allie une expérience de terrain solide à une exigence pédagogique — du centre de formation au plus haut niveau.\n\nÉducateur dans l'âme, il accompagne et mentor des joueurs depuis des années, avec une vision long terme du développement et de la performance. En parallèle du football, il exerce comme entrepreneur et dirigeant dans le bâtiment.\n\nCe parcours pluriel nourrit un projet commun : un écosystème Elevare tourné vers le joueur, où expertise sportive, pédagogie et leadership se rencontrent.",
          experience: ["Responsable Mondial (Bureau d'Istanbul)", "Ancien Footballeur et Entraîneur", "Cadre dans le Secteur de la Construction"]
        },
        {
          name: "Baransel",
          role: "Agent Licencié FIFA",
          bio: "Baransel Soysal est basé à Paris et opère principalement en Europe du Sud et en Afrique du Nord. Il travaille au sein d'un solide réseau international, connectant les talents aux bonnes opportunités au bon moment.\n\nSon parcours combine développement commercial, financement de projets et entrepreneuriat, principalement dans le secteur de la tech, apportant une perspective structurée et stratégique à la gestion des joueurs.\n\nEn dehors du football, c'est un navigateur de compétition, reflétant la même discipline et le même état d'esprit de performance qu'il apporte à son travail avec les athlètes. Il parle turc, anglais, français, italien et espagnol.",
          experience: ["Responsable Europe du Sud et Afrique du Nord (Paris)", "Développement Commercial et Financement de Projets", "Multilingue : TR, EN, FR, IT, ES"]
        },
        {
          name: "Yigit",
          role: "Agent Licencié FIFA",
          bio: "Yiğit Çavuşoğlu dirige les opérations d'Elevare en Europe du Nord depuis le bureau d'Amsterdam. Il opère à travers un solide réseau européen, connectant les joueurs aux bons clubs et opportunités.\n\nSon parcours s'étend sur des environnements commerciaux internationaux, particulièrement dans la tech et la logistique, apportant une approche structurée et stratégique au développement des joueurs.\n\nIl a également mis en place les systèmes de scouting et d'analyse d'Elevare, renforçant la prise de décision basée sur les données de l'organisation.",
          experience: ["Responsable des Opérations en Europe du Nord", "Concepteur de Systèmes de Scouting et d'Analyse", "Expert en Commerce International"]
        }
      ]
    },
    portfolio: {
      title: "PORTFOLIO",
      subtitle: "JOUEURS",
      description: "Nos stars sont actuellement en train de descendre du ciel.",
      subtext: "Restez à l'écoute pour le lancement"
    },
    contact: {
      title: "Passez à l'étape suivante avec nous",
      button: "Discutons",
      modalTitle: "Entrez en",
      modalSubtitle: "Contact",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse E-mail",
      message: "Votre Message",
      placeholderFirstName: "Arda",
      placeholderLastName: "Güler",
      placeholderEmail: "arda@realmadrid.com",
      placeholderMessage: "Comment pouvons-nous vous aider à élever votre carrière ?",
      send: "Envoyer le Message",
      offices: {
        istanbul: "Bureau d'Istanbul",
        paris: "Bureau de Paris",
        amsterdam: "Bureau d'Amsterdam"
      },
      privacy: "Politique de Confidentialité",
      terms: "Conditions Générales"
    }
  }
};

