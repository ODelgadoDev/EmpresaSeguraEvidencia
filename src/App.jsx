import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    tipoCliente: 'Residencial',
    ciudad: '',
    direccion: '',
    consumo: '',
    tarifa: '',
    recibo: '',
    comentarios: '',
    avisoPrivacidad: false,
    confidencialidad: false,
    deslinde: false,
  });

  const [resultado, setResultado] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;

    if (type === 'file') {
      setFormData({
        ...formData,
        recibo: files[0] ? files[0].name : '',
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const generarCotizacion = () => {
    const consumo = Number(formData.consumo);

    if (
      !formData.nombre ||
      !formData.telefono ||
      !formData.correo ||
      !formData.consumo ||
      !formData.avisoPrivacidad ||
      !formData.confidencialidad ||
      !formData.deslinde
    ) {
      alert(
        'Completa nombre, teléfono, correo, consumo mensual y acepta el aviso de privacidad, confidencialidad y deslinde de responsabilidad.'
      );
      return;
    }

    const sistemaKwNumero = Math.max(consumo / 135, 1);
    const sistemaKw = sistemaKwNumero.toFixed(1);
    const paneles = Math.ceil((sistemaKwNumero * 1000) / 550);
    const generacion = Math.round(sistemaKwNumero * 135);
    const ahorro = Math.min(Math.round(consumo * 0.65), consumo);

    setResultado({
      folio: `ERN-${Date.now().toString().slice(-6)}`,
      sistemaKw,
      paneles,
      generacion,
      ahorro,
    });
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">ERN</div>
          <div>
            <h1>Energías Renovables del Norte</h1>
            <p>Soluciones solares para hogares, negocios y empresas</p>
          </div>
        </div>

        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#cotizador">Cotizar</a>
          <a href="#recibo">Recibo CFE</a>
          <a href="#legal">Aviso y deslinde</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="tag">Energía solar · Ahorro · Sustentabilidad</span>
            <h2>Instalación y cotización de paneles solares</h2>
            <p>
              En Energías Renovables del Norte ayudamos a hogares, comercios y empresas
              a reducir su consumo eléctrico mediante sistemas fotovoltaicos diseñados
              según su recibo de luz, consumo mensual y necesidades de instalación.
            </p>

            <div className="hero-actions">
              <a href="#cotizador" className="btn-primary">
                Solicitar cotización
              </a>
              <a href="#legal" className="btn-secondary">
                Aviso de privacidad
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Cotización demo</h3>
            <p>
              Esta aplicación permite simular una solicitud de cotización solar y muestra
              cómo una empresa debe informar el uso, resguardo y confidencialidad de los
              datos proporcionados por el cliente.
            </p>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-header">
            <span className="section-number">01</span>
            <div>
              <h2>¿Qué hace la empresa?</h2>
              <p>
                Energías Renovables del Norte ofrece soluciones solares para reducir el
                gasto eléctrico y aprovechar energías limpias.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Cotización solar</h3>
              <p>
                Analizamos el consumo mensual del cliente para estimar la capacidad del
                sistema solar, cantidad aproximada de paneles y generación esperada.
              </p>
            </article>

            <article className="info-card">
              <h3>Análisis de recibo CFE</h3>
              <p>
                El recibo de luz permite revisar tarifa, consumo, historial e información
                necesaria para preparar una propuesta técnica y comercial.
              </p>
            </article>

            <article className="info-card">
              <h3>Instalación fotovoltaica</h3>
              <p>
                En un caso real, el proyecto requiere visita técnica, revisión de techo,
                orientación, sombras, estructura, cableado y condiciones eléctricas.
              </p>
            </article>

            <article className="info-card">
              <h3>Seguimiento empresarial</h3>
              <p>
                La información del cliente se usa para dar seguimiento a la solicitud,
                resolver dudas, preparar propuestas y programar atención técnica.
              </p>
            </article>
          </div>
        </section>

        <section id="cotizador" className="section section-alt">
          <div className="section-header">
            <span className="section-number">02</span>
            <div>
              <h2>Formulario de cotización</h2>
              <p>
                Llena la solicitud para generar una cotización preliminar de paneles
                solares. Esta demo no almacena información real.
              </p>
            </div>
          </div>

          <div className="app-layout">
            <form className="quote-form">
              <div className="form-block">
                <h3>Datos del solicitante</h3>
                <p>
                  Estos datos permiten contactar al cliente, identificar el tipo de
                  proyecto y dar seguimiento a la solicitud de cotización.
                </p>
              </div>

              <label>
                Nombre completo
                <input
                  name="nombre"
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </label>

              <div className="two-columns">
                <label>
                  Teléfono
                  <input
                    name="telefono"
                    type="tel"
                    placeholder="Ej. 614 000 0000"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Correo electrónico
                  <input
                    name="correo"
                    type="email"
                    placeholder="cliente@correo.com"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="two-columns">
                <label>
                  Tipo de cliente
                  <select
                    name="tipoCliente"
                    value={formData.tipoCliente}
                    onChange={handleChange}
                  >
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Empresarial</option>
                    <option>Industrial</option>
                  </select>
                </label>

                <label>
                  Ciudad o zona
                  <input
                    name="ciudad"
                    type="text"
                    placeholder="Ej. Chihuahua, Chih."
                    value={formData.ciudad}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label>
                Dirección aproximada de instalación
                <input
                  name="direccion"
                  type="text"
                  placeholder="Colonia, ciudad o referencia general"
                  value={formData.direccion}
                  onChange={handleChange}
                />
              </label>

              <div className="form-block">
                <h3>Información energética</h3>
                <p>
                  El consumo mensual y la tarifa ayudan a estimar de forma preliminar el
                  tamaño del sistema solar.
                </p>
              </div>

              <div className="two-columns">
                <label>
                  Consumo mensual aproximado en kWh
                  <input
                    name="consumo"
                    type="number"
                    placeholder="Ej. 850"
                    value={formData.consumo}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Tarifa, si se conoce
                  <input
                    name="tarifa"
                    type="text"
                    placeholder="Ej. 1C, DAC, PDBT, GDMTO"
                    value={formData.tarifa}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div id="recibo" className="upload-box">
                <h3>Subir recibo CFE demo</h3>
                <p>
                  Adjunta un recibo de luz en PDF, PNG o JPG. En esta aplicación
                  académica el archivo no se sube a ningún servidor; solo se muestra su
                  nombre para simular el proceso empresarial.
                </p>

                <input
                  name="recibo"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleChange}
                />

                {formData.recibo && (
                  <div className="file-alert">
                    Archivo seleccionado: <strong>{formData.recibo}</strong>
                    <br />
                    Demo local: el archivo no se procesa ni se almacena.
                  </div>
                )}
              </div>

              <label>
                Comentarios del proyecto
                <textarea
                  name="comentarios"
                  placeholder="Ej. Me interesa reducir mi recibo de luz y conocer cuántos paneles necesito."
                  value={formData.comentarios}
                  onChange={handleChange}
                ></textarea>
              </label>

              <div className="legal-checks">
                <label className="checkbox">
                  <input
                    name="avisoPrivacidad"
                    type="checkbox"
                    checked={formData.avisoPrivacidad}
                    onChange={handleChange}
                  />
                  Acepto el aviso de privacidad y autorizo el uso de mis datos para
                  elaborar una cotización.
                </label>

                <label className="checkbox">
                  <input
                    name="confidencialidad"
                    type="checkbox"
                    checked={formData.confidencialidad}
                    onChange={handleChange}
                  />
                  Reconozco que mi recibo CFE puede contener información personal,
                  domiciliaria y de consumo eléctrico.
                </label>

                <label className="checkbox">
                  <input
                    name="deslinde"
                    type="checkbox"
                    checked={formData.deslinde}
                    onChange={handleChange}
                  />
                  Acepto que esta cotización es preliminar y que requiere validación
                  técnica para ser considerada formal.
                </label>
              </div>

              <button type="button" onClick={generarCotizacion}>
                Generar cotización preliminar
              </button>

              <a href="#legal" className="legal-link">
                Consultar aviso de privacidad, confidencialidad y deslinde
              </a>
            </form>

            <aside className="quote-panel">
              <span className="panel-label">Resultado</span>
              <h3>Cotización preliminar</h3>

              {!resultado ? (
                <p>
                  Completa el formulario para generar una estimación. El cálculo es
                  demostrativo y no sustituye una visita técnica.
                </p>
              ) : (
                <div className="quote-result">
                  <span className="folio">{resultado.folio}</span>

                  <div>
                    <small>Sistema sugerido aproximado</small>
                    <p className="big-number">{resultado.sistemaKw} kW</p>
                  </div>

                  <div className="result-row">
                    <span>Paneles aproximados de 550 W</span>
                    <strong>{resultado.paneles}</strong>
                  </div>

                  <div className="result-row">
                    <span>Generación estimada</span>
                    <strong>{resultado.generacion} kWh/mes</strong>
                  </div>

                  <div className="result-row">
                    <span>Ahorro energético estimado</span>
                    <strong>{resultado.ahorro} kWh/mes</strong>
                  </div>

                  <div className="quote-warning">
                    Para una propuesta formal se requiere analizar el recibo CFE, tarifa,
                    ubicación exacta, orientación, sombras, estructura y condiciones de
                    instalación.
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <span className="section-number">03</span>
            <div>
              <h2>Uso de datos y recibo CFE</h2>
              <p>
                La información solicitada tiene una finalidad empresarial relacionada con
                la cotización solar.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Datos de contacto</h3>
              <p>
                Nombre, teléfono y correo se usan para contactar al solicitante, enviar la
                cotización, resolver dudas y dar seguimiento comercial.
              </p>
            </article>

            <article className="info-card">
              <h3>Ubicación</h3>
              <p>
                La ciudad o dirección aproximada ayuda a revisar cobertura, viabilidad de
                instalación, condiciones del inmueble y zona de atención.
              </p>
            </article>

            <article className="info-card">
              <h3>Consumo eléctrico</h3>
              <p>
                El consumo mensual en kWh permite estimar la capacidad del sistema solar,
                cantidad aproximada de paneles y ahorro energético.
              </p>
            </article>

            <article className="info-card">
              <h3>Recibo CFE</h3>
              <p>
                Puede contener domicilio, número de servicio, tarifa, historial de consumo,
                importes de pago y datos del titular del contrato eléctrico.
              </p>
            </article>
          </div>
        </section>

        <section id="legal" className="section section-alt">
          <div className="section-header">
            <span className="section-number">04</span>
            <div>
              <h2>Aviso de privacidad, confidencialidad y deslinde</h2>
              <p>
                Información sobre el tratamiento de datos personales, recibos CFE,
                confidencialidad de la información y límites de responsabilidad de
                Energías Renovables del Norte.
              </p>
            </div>
          </div>

          <div className="legal-box">
            <div className="legal-intro">
              <h3>Aviso de privacidad integral</h3>
              <p>
                Energías Renovables del Norte, empresa dedicada a la asesoría,
                cotización e instalación de sistemas de paneles solares, informa que los
                datos proporcionados por el usuario serán utilizados únicamente para
                atender solicitudes relacionadas con soluciones de energía solar.
              </p>
              <p>
                Este aviso explica qué información se solicita, para qué se utiliza,
                quién puede tener acceso, cómo se protege, cómo se puede limitar su uso
                y cuáles son los alcances de responsabilidad de la empresa.
              </p>
            </div>

            <h3>1. Identidad del responsable</h3>
            <p>
              El responsable del tratamiento de los datos personales es Energías
              Renovables del Norte. Para efectos de esta aplicación académica, la empresa
              representa un negocio del sector empresarial dedicado a brindar servicios
              de cotización, análisis energético e instalación de paneles solares para
              clientes residenciales, comerciales, empresariales e industriales.
            </p>

            <h3>2. Datos personales que pueden solicitarse</h3>
            <p>
              Para elaborar una cotización solar, la empresa puede solicitar datos de
              identificación y contacto como nombre completo, teléfono, correo
              electrónico, ciudad, zona de instalación, dirección aproximada, tipo de
              cliente y comentarios relacionados con el proyecto.
            </p>
            <p>
              También puede solicitar información energética como consumo mensual en kWh,
              tarifa eléctrica, tipo de servicio, historial de consumo y recibo de luz
              CFE en formato PDF, PNG o JPG. En caso de contratación real, podrían
              solicitarse datos fiscales como razón social, RFC, domicilio fiscal y datos
              necesarios para facturación.
            </p>

            <h3>3. Información contenida en el recibo CFE</h3>
            <p>
              El recibo de luz CFE puede contener información relevante para dimensionar
              un sistema solar, pero también puede incluir datos personales o
              patrimoniales. Entre ellos pueden encontrarse el nombre del titular,
              domicilio del servicio, número de servicio, número de medidor, tarifa,
              periodo facturado, consumo histórico, importes de pago y referencias del
              contrato eléctrico.
            </p>
            <p>
              Por esta razón, el recibo debe tratarse como documento confidencial. Su uso
              debe limitarse al análisis de consumo eléctrico y a la elaboración de una
              propuesta técnica o comercial relacionada con paneles solares.
            </p>

            <h3>4. Finalidades principales del tratamiento</h3>
            <p>
              Los datos personales y energéticos se utilizarán para atender la solicitud
              del cliente, analizar su consumo eléctrico, estimar la capacidad del
              sistema fotovoltaico, calcular una cantidad aproximada de paneles solares,
              preparar una cotización preliminar, contactar al solicitante, resolver
              dudas, programar una visita técnica y dar seguimiento administrativo o
              comercial al proyecto.
            </p>
            <p>
              En caso de que el cliente decida continuar con el proceso, la información
              también podría utilizarse para preparar una propuesta formal, generar
              documentación de instalación, coordinar personal técnico, revisar
              condiciones del inmueble y emitir documentos fiscales relacionados con la
              contratación.
            </p>

            <h3>5. Finalidades secundarias</h3>
            <p>
              La empresa podría utilizar datos de contacto para enviar información sobre
              promociones, mantenimiento, seguimiento de satisfacción, recomendaciones de
              ahorro energético o nuevos servicios relacionados con energías renovables.
              Estas finalidades no son indispensables para elaborar una cotización, por
              lo que el titular puede solicitar que no se utilicen sus datos para dichos
              fines.
            </p>

            <h3>6. Confidencialidad de la información</h3>
            <p>
              Toda la información proporcionada por el cliente será considerada
              confidencial cuando revele datos personales, domicilio, consumo eléctrico,
              información fiscal, capacidad de pago, condiciones del inmueble o detalles
              del proyecto. La empresa no deberá vender, publicar, divulgar, compartir o
              utilizar esta información para fines ajenos a la cotización sin
              autorización del titular o sin una causa legal aplicable.
            </p>
            <p>
              El acceso a los datos debe limitarse al personal autorizado y únicamente
              cuando sea necesario para cumplir sus funciones. Esto incluye asesores
              comerciales, personal técnico, área administrativa, facturación, dirección o
              proveedores que participen directamente en el proyecto.
            </p>

            <div className="mini-grid">
              <article>
                <h3>Medidas administrativas</h3>
                <p>
                  Políticas internas, capacitación del personal, acuerdos de
                  confidencialidad, asignación de responsables, autorización de accesos y
                  procedimientos para atender solicitudes de clientes.
                </p>
              </article>

              <article>
                <h3>Medidas técnicas</h3>
                <p>
                  Contraseñas seguras, permisos por rol, cifrado, respaldos, bitácoras
                  de acceso, antivirus, control de sesiones y protección contra accesos
                  no autorizados.
                </p>
              </article>

              <article>
                <h3>Medidas físicas</h3>
                <p>
                  Resguardo de documentos impresos, control de acceso a oficinas,
                  protección de equipos, almacenamiento bajo llave y destrucción segura
                  de expedientes.
                </p>
              </article>
            </div>

            <h3>7. Transferencias de información</h3>
            <p>
              La información del cliente solo podrá compartirse cuando sea necesario para
              cumplir con la finalidad del servicio. Por ejemplo, con asesores técnicos,
              instaladores, personal administrativo, proveedores autorizados, área de
              facturación, entidades de financiamiento o autoridades competentes cuando
              exista obligación legal.
            </p>
            <p>
              En caso de transferir información a terceros relacionados con el proyecto,
              estos deberán utilizar los datos únicamente para la finalidad autorizada y
              mantener medidas de confidencialidad equivalentes.
            </p>

            <h3>8. Conservación y eliminación de datos</h3>
            <p>
              En un proceso real, los datos deberán conservarse únicamente durante el
              tiempo necesario para atender la cotización, cumplir obligaciones legales,
              mantener evidencia administrativa o dar seguimiento autorizado por el
              cliente. Una vez cumplida la finalidad, la información deberá eliminarse,
              bloquearse o resguardarse conforme a las políticas internas aplicables.
            </p>

            <h3>9. Derechos ARCO</h3>
            <p>
              El titular puede solicitar acceso a sus datos personales, rectificación
              cuando sean incorrectos o estén desactualizados, cancelación cuando ya no
              sean necesarios u oposición al tratamiento para ciertas finalidades. Estos
              derechos se conocen como derechos ARCO.
            </p>
            <p>
              Para ejercerlos en un entorno real, el titular podría comunicarse al correo
              de atención de privacidad de la empresa, presentando su nombre, medio de
              contacto, descripción clara de la solicitud y documento que acredite su
              identidad o representación legal cuando corresponda.
            </p>

            <h3>10. Revocación del consentimiento</h3>
            <p>
              El titular puede solicitar que se deje de utilizar su información para
              finalidades no indispensables, como promociones o seguimiento comercial
              adicional. La revocación no afecta tratamientos necesarios para cumplir
              obligaciones legales, administrativas o contractuales ya iniciadas.
            </p>

            <h3>11. Seguridad en la carga de archivos</h3>
            <p>
              El apartado para subir recibo CFE dentro de esta aplicación es una
              simulación. En esta demo, el archivo no se procesa, no se almacena, no se
              envía a servidores y no se comparte con terceros. Solo se muestra el nombre
              del archivo seleccionado para representar el flujo de una aplicación
              empresarial.
            </p>
            <p>
              En una implementación real, la empresa debería aplicar validación de tipo
              de archivo, límite de tamaño, almacenamiento seguro, cifrado, control de
              accesos, eliminación programada y revisión contra archivos maliciosos.
            </p>

            <h3>12. Deslinde de responsabilidad</h3>
            <p>
              La cotización generada por esta aplicación es preliminar y demostrativa. No
              representa una oferta comercial definitiva, no garantiza ahorro específico
              y no sustituye una evaluación técnica profesional.
            </p>
            <p>
              Para una propuesta formal se requiere revisar el recibo CFE completo,
              historial de consumo, tarifa aplicable, ubicación exacta, orientación del
              techo, sombras, estructura, materiales, permisos, condiciones eléctricas,
              costos vigentes y disponibilidad de equipo.
            </p>
            <p>
              Energías Renovables del Norte no será responsable por decisiones
              económicas, comerciales o técnicas tomadas únicamente con base en el
              resultado simulado de esta aplicación.
            </p>

            <h3>13. Responsabilidad del usuario</h3>
            <p>
              En un proceso real, el usuario declara que la información proporcionada es
              correcta y que cuenta con autorización para compartir el recibo de luz o
              documentos relacionados con el inmueble. En esta versión académica, se
              recomienda no ingresar datos personales reales ni cargar documentos
              verdaderos.
            </p>

            <h3>14. Cambios al aviso de privacidad</h3>
            <p>
              La empresa podrá modificar este aviso de privacidad cuando existan cambios
              en sus procesos, servicios, obligaciones legales o medidas de seguridad.
              Cualquier cambio relevante deberá comunicarse por medios visibles, como el
              sitio web oficial, correo electrónico o aviso directo al cliente.
            </p>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="section-header">
            <span className="section-number">05</span>
            <div>
              <h2>Contacto</h2>
              <p>
                Área de atención para solicitudes de cotización, seguimiento de proyectos
                solares y dudas sobre privacidad de la información.
              </p>
            </div>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Energías Renovables del Norte</h3>
              <p>
                Empresa dedicada a la asesoría, cotización e instalación de sistemas de
                paneles solares para hogares, negocios y empresas.
              </p>

              <div className="contact-list">
                <p>
                  <strong>Teléfono:</strong> 614 000 0000
                </p>
                <p>
                  <strong>Correo comercial:</strong> cotizaciones@ern-demo.com
                </p>
                <p>
                  <strong>Correo de privacidad:</strong> privacidad@ern-demo.com
                </p>
                <p>
                  <strong>Horario de atención:</strong> Lunes a viernes, 9:00 a.m. a
                  6:00 p.m.
                </p>
                <p>
                  <strong>Zona de servicio:</strong> Chihuahua y municipios cercanos.
                </p>
              </div>

              <div className="contact-note">
                Los datos de contacto son demostrativos y forman parte de la simulación
                académica de la empresa.
              </div>
            </div>

            <form className="contact-form">
              <h3>Solicitar información</h3>

              <label>
                Nombre
                <input type="text" placeholder="Nombre del solicitante" />
              </label>

              <label>
                Correo electrónico
                <input type="email" placeholder="correo@ejemplo.com" />
              </label>

              <label>
                Motivo de contacto
                <select>
                  <option>Cotización de paneles solares</option>
                  <option>Seguimiento de solicitud</option>
                  <option>Duda sobre aviso de privacidad</option>
                  <option>Ejercicio de derechos ARCO</option>
                  <option>Otro</option>
                </select>
              </label>

              <label>
                Mensaje
                <textarea placeholder="Escribe tu mensaje"></textarea>
              </label>

              <button type="button">Enviar mensaje demo</button>

              <p>
                Este formulario es demostrativo. No almacena ni envía información real.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Energías Renovables del Norte · Cotización solar y manejo responsable de
          información
        </p>
      </footer>
    </div>
  );
}

export default App;