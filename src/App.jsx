function App() {
  const teamMembers = [
    {
      name: 'JESUS ORLANDO DELGADO AZAR',
      role: 'Estructura, desarrollo web y presentación general',
    },
    {
      name: 'HECTOR ANTONIO TERRAZAS GUEVARA',
      role: 'Normas, estándares, riesgos y marco técnico',
    },
    {
      name: 'JOSE ANGEL LOPEZ DE SANTIAGO',
      role: 'Aviso de privacidad, confidencialidad y responsabilidad',
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">ES</div>
          <div>
            <h1>Empresa Segura</h1>
            <p>Protección de datos en el sector empresarial</p>
          </div>
        </div>

        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#datos">Datos</a>
          <a href="#normas">Normas</a>
          <a href="#privacidad">Privacidad</a>
          <a href="#confidencialidad">Confidencialidad</a>
          <a href="#terminos">Términos</a>
          <a href="#equipo">Equipo</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="tag">Equipo 3 · Sector empresarial</span>
            <h2>Manejo seguro de información empresarial</h2>
            <p>
              Esta App Web académica presenta leyes, normas, estándares y buenas
              prácticas relacionadas con la protección de datos personales,
              confidencialidad, seguridad informática y deslinde de
              responsabilidad dentro de una empresa.
            </p>

            <div className="hero-actions">
              <a href="#normas" className="btn-primary">
                Ver marco legal
              </a>
              <a href="#privacidad" className="btn-secondary">
                Aviso de privacidad
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Objetivo de la app</h3>
            <p>
              Informar cómo una empresa debe proteger la información de
              clientes, empleados, proveedores y operaciones internas mediante
              medidas legales, administrativas y tecnológicas.
            </p>
          </div>
        </section>

        <section id="datos" className="section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Información que maneja una empresa</h2>
          </div>

          <p>
            En el sector empresarial se manejan datos personales, fiscales,
            financieros, laborales, comerciales y administrativos. Esta
            información debe protegerse para evitar accesos no autorizados, uso
            indebido, pérdida de datos, fraudes, robo de identidad o filtraciones
            internas.
          </p>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Clientes</h3>
              <p>
                Nombre, teléfono, correo electrónico, domicilio, historial de
                compras, servicios solicitados, cotizaciones, facturas, pagos y
                datos de contacto.
              </p>
            </article>

            <article className="info-card">
              <h3>Empleados</h3>
              <p>
                Datos de identificación, expediente laboral, puesto, asistencia,
                nómina, evaluaciones, documentación interna y datos de contacto
                de emergencia.
              </p>
            </article>

            <article className="info-card">
              <h3>Proveedores</h3>
              <p>
                Razón social, RFC, datos bancarios, correo, teléfono, contratos,
                órdenes de compra, cotizaciones y condiciones comerciales.
              </p>
            </article>

            <article className="info-card">
              <h3>Operaciones internas</h3>
              <p>
                Reportes administrativos, cuentas por cobrar, cuentas pagadas,
                contratos, documentos fiscales, inventarios, estrategias y
                archivos confidenciales.
              </p>
            </article>
          </div>
        </section>

        <section id="normas" className="section section-alt">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Normas, estándares y leyes aplicables</h2>
          </div>

          <p>
            Una empresa debe identificar las disposiciones legales y buenas
            prácticas que regulan el manejo de información. Esto permite definir
            políticas internas, controles de acceso, medidas de seguridad,
            avisos de privacidad y responsabilidades para el personal.
          </p>

          <div className="law-list">
            <div>
              <h3>
                Ley Federal de Protección de Datos Personales en Posesión de los
                Particulares
              </h3>
              <p>
                Es la ley principal para empresas privadas en México. Regula el
                tratamiento legítimo, controlado e informado de los datos
                personales. Su finalidad es proteger la privacidad y el derecho
                de las personas a decidir sobre el uso de su información.
              </p>
            </div>

            <div>
              <h3>Lineamientos del Aviso de Privacidad</h3>
              <p>
                Establecen los elementos que debe contener un aviso de
                privacidad, como la identidad del responsable, los datos
                tratados, las finalidades del tratamiento, las transferencias,
                los medios para ejercer derechos ARCO y el procedimiento para
                comunicar cambios al aviso.
              </p>
            </div>

            <div>
              <h3>Derechos ARCO</h3>
              <p>
                Son los derechos de Acceso, Rectificación, Cancelación y
                Oposición. Permiten que el titular de los datos pueda conocer
                qué información se tiene sobre él, solicitar correcciones, pedir
                que se eliminen sus datos cuando corresponda u oponerse a ciertos
                usos.
              </p>
            </div>

            <div>
              <h3>ISO/IEC 27001</h3>
              <p>
                Estándar internacional relacionado con la gestión de seguridad
                de la información. Ayuda a proteger la confidencialidad,
                integridad y disponibilidad mediante gestión de riesgos,
                políticas, controles y mejora continua.
              </p>
            </div>

            <div>
              <h3>NIST Cybersecurity Framework 2.0</h3>
              <p>
                Marco de referencia para gestionar riesgos de ciberseguridad.
                Sus funciones principales son gobernar, identificar, proteger,
                detectar, responder y recuperar. En una empresa ayuda a ordenar
                controles y planes de acción ante incidentes.
              </p>
            </div>

            <div>
              <h3>OWASP Top 10</h3>
              <p>
                Documento de concientización sobre los riesgos más críticos en
                aplicaciones web. Es útil para revisar amenazas como control de
                acceso roto, fallas de autenticación, inyección de código,
                exposición de datos y configuraciones inseguras.
              </p>
            </div>
          </div>
        </section>

        <section id="privacidad" className="section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Aviso de privacidad empresarial</h2>
          </div>

          <div className="text-box">
            <h3>Identidad del responsable</h3>
            <p>
              Empresa Segura es una App Web desarrollada con fines académicos.
              Para efectos demostrativos, representa a una empresa que trata
              información de clientes, empleados, proveedores y contactos
              comerciales. Esta aplicación no pertenece a una empresa real y no
              debe utilizarse para capturar información verdadera.
            </p>

            <h3>Datos personales que podrían tratarse en una empresa</h3>
            <p>
              Una empresa puede tratar datos de identificación como nombre,
              domicilio, teléfono, correo electrónico, RFC, CURP en algunos
              procesos, datos de facturación, datos laborales, puesto, área,
              documentos administrativos, contratos, pagos, historial de compras
              y comunicación comercial.
            </p>

            <h3>Finalidades del tratamiento</h3>
            <p>
              Los datos personales podrían utilizarse para atención a clientes,
              elaboración de cotizaciones, facturación, seguimiento de pagos,
              administración de proveedores, control interno, prestación de
              servicios, gestión de personal, cumplimiento de obligaciones
              contractuales, fiscales, laborales y administrativas.
            </p>

            <h3>Medidas de seguridad</h3>
            <p>
              La información debe protegerse mediante medidas administrativas,
              técnicas y físicas. Entre ellas se encuentran políticas internas,
              capacitación del personal, contraseñas seguras, control de accesos,
              respaldos, cifrado, antivirus, bitácoras de actividad, resguardo de
              documentos físicos y eliminación segura de información.
            </p>

            <h3>Derechos ARCO</h3>
            <p>
              El titular de los datos puede solicitar acceso a sus datos,
              rectificación en caso de errores, cancelación cuando proceda y
              oposición a ciertos tratamientos. En un caso real, la empresa debe
              proporcionar medios claros para ejercer estos derechos.
            </p>

            <h3>Transferencias de información</h3>
            <p>
              En una empresa, cierta información puede compartirse con
              autoridades fiscales, proveedores de servicios, bancos,
              despachos contables o plataformas tecnológicas, siempre que exista
              una finalidad legítima y se respeten las obligaciones legales de
              protección de datos.
            </p>

            <h3>Cambios al aviso de privacidad</h3>
            <p>
              Cualquier cambio al aviso de privacidad debe comunicarse por medios
              accesibles para los titulares de los datos. En un entorno real,
              esto puede hacerse mediante sitio web oficial, correo electrónico,
              publicación interna o medios de contacto establecidos por la
              empresa.
            </p>
          </div>
        </section>

        <section id="confidencialidad" className="section section-alt">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>Confidencialidad de la información</h2>
          </div>

          <div className="text-box">
            <p>
              Toda información empresarial que contenga datos personales,
              fiscales, financieros, comerciales, laborales o estratégicos debe
              considerarse confidencial. Esto significa que no puede consultarse,
              modificarse, compartirse o eliminarse sin autorización.
            </p>

            <p>
              El acceso a la información debe limitarse únicamente al personal
              autorizado, aplicando el principio de mínimo privilegio. Cada
              empleado debe consultar solo la información necesaria para cumplir
              sus actividades laborales.
            </p>

            <p>
              La confidencialidad debe mantenerse durante y después de la
              relación laboral, comercial o contractual. Por ello, una empresa
              puede apoyarse en acuerdos de confidencialidad, reglamentos
              internos, políticas de seguridad y controles tecnológicos.
            </p>

            <div className="mini-grid">
              <article>
                <h3>Controles administrativos</h3>
                <p>
                  Políticas internas, capacitación, asignación de
                  responsabilidades, acuerdos de confidencialidad y procedimientos
                  de atención a incidentes.
                </p>
              </article>

              <article>
                <h3>Controles técnicos</h3>
                <p>
                  Contraseñas seguras, autenticación, cifrado, respaldos,
                  permisos por rol, firewalls, antivirus y registro de accesos.
                </p>
              </article>

              <article>
                <h3>Controles físicos</h3>
                <p>
                  Resguardo de expedientes, acceso controlado a oficinas,
                  protección de equipos, destrucción segura de documentos y
                  almacenamiento bajo llave.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="terminos" className="section">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2>Términos de uso y deslinde de responsabilidad</h2>
          </div>

          <div className="text-box warning">
            <h3>Uso académico</h3>
            <p>
              Esta App Web fue desarrollada únicamente con fines educativos para
              la materia de Seguridad Informática. Su objetivo es mostrar cómo
              una empresa puede informar sobre el tratamiento, protección,
              confidencialidad y manejo responsable de la información.
            </p>

            <h3>No sustituye asesoría profesional</h3>
            <p>
              La información presentada no sustituye asesoría legal, fiscal,
              contable, laboral, administrativa ni de especialistas en protección
              de datos o ciberseguridad. Para casos reales, una empresa debe
              consultar legislación vigente y asesorarse con personal
              especializado.
            </p>

            <h3>No captura datos reales</h3>
            <p>
              El formulario de esta aplicación es solamente demostrativo. No se
              deben ingresar nombres reales, teléfonos, correos, RFC, datos
              bancarios, datos laborales, documentos, contraseñas ni información
              confidencial verdadera.
            </p>

            <h3>Limitación de responsabilidad</h3>
            <p>
              Los desarrolladores de esta App Web no se hacen responsables por el
              uso indebido de la información presentada ni por la captura de datos
              reales por parte de terceros. La aplicación no almacena información
              y no realiza trámites oficiales.
            </p>

            <h3>Responsabilidad del usuario</h3>
            <p>
              El usuario se compromete a utilizar esta aplicación únicamente con
              fines académicos, ingresando datos ficticios y respetando las
              indicaciones relacionadas con privacidad, confidencialidad y
              seguridad de la información.
            </p>
          </div>
        </section>

        <section id="riesgos" className="section section-alt">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2>Riesgos de un mal manejo de información</h2>
          </div>

          <div className="risk-grid">
            <article>
              <h3>Robo de identidad</h3>
              <p>
                Puede ocurrir cuando datos como nombre, RFC, domicilio o correo
                son utilizados por terceros para hacerse pasar por una persona.
              </p>
            </article>

            <article>
              <h3>Fraude financiero</h3>
              <p>
                La exposición de datos bancarios, facturación o pagos puede
                facilitar fraudes, cargos no reconocidos o engaños comerciales.
              </p>
            </article>

            <article>
              <h3>Pérdida de confianza</h3>
              <p>
                Una fuga de información puede afectar la reputación de la empresa
                y la relación con clientes, empleados y proveedores.
              </p>
            </article>

            <article>
              <h3>Sanciones legales</h3>
              <p>
                El incumplimiento de obligaciones de privacidad y seguridad puede
                provocar consecuencias legales, económicas o administrativas.
              </p>
            </article>
          </div>
        </section>

        <section id="formulario" className="section">
          <div className="section-header">
            <span className="section-number">07</span>
            <h2>Formulario demo empresarial</h2>
          </div>

          <form className="demo-form">
            <label>
              Nombre del cliente
              <input type="text" placeholder="Ej. Cliente Demo" />
            </label>

            <label>
              Correo electrónico
              <input type="email" placeholder="cliente@ejemplo.com" />
            </label>

            <label>
              Empresa
              <input type="text" placeholder="Empresa ficticia S.A. de C.V." />
            </label>

            <label>
              RFC ficticio
              <input type="text" placeholder="XAXX010101000" />
            </label>

            <label>
              Servicio solicitado
              <select>
                <option>Cotización</option>
                <option>Facturación</option>
                <option>Soporte</option>
                <option>Seguimiento de pago</option>
                <option>Alta de proveedor</option>
              </select>
            </label>

            <label>
              Comentarios
              <textarea placeholder="Escribe un comentario ficticio"></textarea>
            </label>

            <label className="checkbox">
              <input type="checkbox" />
              Acepto el aviso de privacidad y confirmo que estoy usando datos
              ficticios.
            </label>

            <button type="button">Enviar simulación</button>

            <p className="form-note">
              Importante: este formulario es únicamente demostrativo. No ingreses
              información personal real, contraseñas, datos bancarios ni
              documentos confidenciales.
            </p>
          </form>
        </section>

        <section id="equipo" className="section section-alt">
          <div className="section-header">
            <span className="section-number">08</span>
            <h2>Miembros del equipo</h2>
          </div>

          <p>
            Esta App Web fue desarrollada por el Equipo 3 para representar el
            manejo seguro de información en el sector empresarial.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="referencias" className="section">
          <div className="section-header">
            <span className="section-number">09</span>
            <h2>Referencias consultadas</h2>
          </div>

          <div className="references">
            <p>
              Cámara de Diputados. Ley Federal de Protección de Datos Personales
              en Posesión de los Particulares.
              https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
            </p>

            <p>
              Diario Oficial de la Federación. Lineamientos del Aviso de
              Privacidad.
              https://sidof.segob.gob.mx/notas/docFuente/5284966
            </p>

            <p>
              INAI. Guías para titulares y ejercicio de derechos ARCO.
              https://home.inai.org.mx/?page_id=3402
            </p>

            <p>
              ISO. ISO/IEC 27001:2022 Information Security Management Systems.
              https://www.iso.org/standard/27001
            </p>

            <p>
              NIST. Cybersecurity Framework 2.0.
              https://www.nist.gov/cyberframework
            </p>

            <p>
              OWASP Foundation. OWASP Top 10 Web Application Security Risks.
              https://owasp.org/projects/top-ten
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Empresa Segura · Equipo 3 · Sector empresarial · Seguridad Informática
        </p>
      </footer>
    </div>
  );
}

export default App;