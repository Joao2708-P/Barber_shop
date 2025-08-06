"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Issticky, setSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  window.addEventListener("scroll", function() {
    var header = this.document.querySelector("header")
    header?.classList.toggle("sticky", this.window.scrollY > 0)
  })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={`${styles.header} ${Issticky ? styles.sticky : ''}`}>
          <div className={styles.logo}>
            <Image src="/Logo_barber_shop.png" alt="Logo" width={100} height={100} />
            <h1>Almeida</h1>
          </div>
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
          </button>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.ul}>
              <li className={styles.li}><a href="#inicio" onClick={toggleMenu}>Inicio</a></li>
              <li className={styles.li}><a href="#sobre" onClick={toggleMenu}>Quem é Lucas Almeida?</a></li>
              <li className={styles.li}><a href="#cortes" onClick={toggleMenu}>Cortes</a></li>
              <li className={styles.li}><a href="#agendamento" onClick={toggleMenu}>Agendamento</a></li>
            </ul>
          </nav>
        </header>
        <section id="inicio" className={styles.banner}>
          <div className={styles.overlay}></div>
          <div className={styles.bannerContent}>
            <h2>Estilo é identidade</h2>
            <p>Cortes de respeito com Lucas Almeida</p>
            <button>Agende seu horário</button>
          </div>
        </section>

        {/*Sobre*/}
        <section id="sobre" className={styles.about}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Conheça <span>Lucas Almeida</span></h1>
              <p className={styles.subtitle}>Mais de 10 anos transformando estilos e elevando a autoestima</p>
            </div>
            
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <div className={styles.storySection}>
                  <h3>A Jornada</h3>
                  <p>
                    Lucas Almeida é mais que um barbeiro - é um artista dedicado ao seu ofício há mais de uma década. 
                    Sua paixão pela barbearia nasceu cedo, quando descobriu que cada corte é uma oportunidade única de 
                    elevar a autoestima e transformar vidas.
                  </p>
                </div>

                <div className={styles.philosophySection}>
                  <h3>A Filosofia</h3>
                  <p>
                    Aqui, cada cliente é recebido como um amigo. Lucas acredita que a barbearia é um santuário masculino, 
                    onde histórias são compartilhadas, risadas ecoam pelas paredes e cada homem sai mais confiante e 
                    satisfeito consigo mesmo.
                  </p>
                </div>

                <div className={styles.commitmentSection}>
                  <h3>O Compromisso</h3>
                  <p>
                    Cada corte é executado com precisão e cuidado, respeitando a personalidade e o estilo de vida de cada cliente. 
                    Mais que técnica, Lucas entrega uma experiência completa de bem-estar e renovação.
                  </p>
                </div>

                <div className={styles.statsGrid}>
                  <div className={styles.stat}>
                    <span className={styles.number}>10+</span>
                    <span className={styles.label}>Anos de Experiência</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.number}>5000+</span>
                    <span className={styles.label}>Clientes Satisfeitos</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.number}>100%</span>
                    <span className={styles.label}>Dedicação</span>
                  </div>
                </div>
              </div>

              <div className={styles.aboutImage}>
                <div className={styles.imageWrapper}>
                  <Image src="/Imagem_ilustrativa.png" alt="Lucas Almeida - Barbeiro Profissional" width={350} height={450}/>
                  <div className={styles.imageOverlay}>
                    <span>"Estilo é a expressão da sua personalidade"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Cortes*/}
        <section id="cortes" className={styles.haircuts}>
            <div className={styles.sectionCards}>
              <div className={styles.title}>
                <h1>Nossos <span>Cortes</span></h1>
                <p className={styles.subtitle}>Estilos que destacam a sua personalidade</p>
              </div>
              <div className={styles.hairCards}>
                <div className={styles.hairCard}>
                  <div className={styles.hairCardImage}>
                    <Image 
                      src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop" 
                      alt="Lucas Almeida - Barbeiro Profissional" 
                      width={350} 
                      height={450}
                    />
                  </div>
                  <div className={styles.hairCardContent}>   
                    <h3>Corte Clássico</h3>
                    <p>Um corte que combina estilo e praticidade</p>
                  </div>
                </div>

                <div className={styles.hairCard}>
                  <div className={styles.hairCardImage}>
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                      alt="Lucas Almeida - Barbeiro Profissional" 
                      width={350} 
                      height={450}
                    />
                  </div>
                  <div className={styles.hairCardContent}>   
                    <h3>Corte Moderno</h3>
                    <p>Um corte que esbanja personalidade</p>
                  </div>
                </div>

                <div className={styles.hairCard}>
                  <div className={styles.hairCardImage}>
                    <Image 
                      src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop" 
                      alt="Lucas Almeida - Barbeiro Profissional" 
                      width={350} 
                      height={450}
                    />
                  </div>
                  <div className={styles.hairCardContent}>   
                    <h3>Corte Social</h3>
                    <p>Um corte que combina estilo e praticidade</p>
                  </div>
                </div>
              </div>
            </div>
        </section>

        {/*Formulário de envio*/}
        <section id="agendamento" className={styles.formSection}>
            <div className={styles.containerForm}>
                <div className={styles.title}>
                  <h1>Agende <span>Seu Horário</span></h1>
                  <p className={styles.subtitle}>Entre em contato conosco e reserve seu horário</p>
                </div>
               <form className={styles.form}>
                  <div className={styles.inputGroup}>
                      <label htmlFor="name">Nome Completo</label>
                      <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
                  </div>
                  <div className={styles.inputGroup}>
                      <label htmlFor="phone">Telefone/WhatsApp</label>
                      <input type="tel" id="phone" name="phone" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className={styles.inputGroup}>
                      <label htmlFor="service">Serviço Desejado</label>
                      <select id="service" name="service" required>
                        <option value="">Selecione um serviço</option>
                        <option value="corte">Corte Masculino</option>
                        <option value="barba">Barba</option>
                        <option value="corte-barba">Corte + Barba</option>
                        <option value="sobrancelha">Sobrancelha</option>
                      </select>
                  </div>
                  <div className={styles.inputGroup}>
                      <label htmlFor="date">Data Preferida</label>
                      <input type="date" id="date" name="date" required />
                  </div>
                  <div className={styles.inputGroup}>
                      <label htmlFor="message">Observações</label>
                      <textarea id="message" name="message" placeholder="Alguma observação especial?" rows={4}></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Agendar Horário
                  </button>
               </form>
            </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; João Guilherme</p>
        </div>
      </footer>
    </div>
  );
}
