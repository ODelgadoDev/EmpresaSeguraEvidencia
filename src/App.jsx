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
                Información legal y de seguridad para el tratamiento de datos en Energías
                Renovables del Norte.
              </p>
            </div>
          </div>

          <div className="legal-box">
            <h3>Aviso de privacidad</h3>
            <p>
              Energías Renovables del Norte, como empresa dedicada a la asesoría,
              cotización e instalación de sistemas de paneles solares, informa que los
              datos proporcionados por el usuario serán utilizados para atender solicitudes
              de cotización, analizar consumo eléctrico, preparar propuestas comerciales,
              contactar al solicitante y dar seguimiento al proyecto.
            </p>

            <p>
              Los datos que podrían recabarse incluyen nombre, teléfono, correo
              electrónico, ciudad, dirección aproximada, tipo de cliente, consumo mensual,
              tarifa eléctrica, comentarios del proyecto y documentos relacionados con el
              servicio eléctrico, como el recibo de luz CFE.
            </p>

            <p>
              En caso de avanzar a una contratación real, también podrían solicitarse datos
              fiscales como razón social, RFC, domicilio fiscal, información de facturación
              y documentación administrativa necesaria para la prestación del servicio.
            </p>

            <h3>Finalidades del tratamiento</h3>
            <p>
              Los datos personales se utilizarían para elaborar una cotización preliminar,
              dimensionar el sistema fotovoltaico, estimar número de paneles solares,
              calcular generación aproximada, programar visitas técnicas, preparar una
              propuesta formal, contactar al cliente y dar seguimiento administrativo o
              comercial.
            </p>

            <h3>Uso del recibo CFE</h3>
            <p>
              El recibo CFE puede ser utilizado para revisar tarifa, historial de consumo,
              importe del servicio, número de servicio, domicilio de instalación y datos
              del titular. Esta información es necesaria para realizar un análisis más
              preciso del proyecto solar, pero debe manejarse con confidencialidad.
            </p>

            <h3>Confidencialidad de la información</h3>
            <p>
              La información proporcionada por el cliente será considerada confidencial. No
              deberá compartirse, venderse, publicarse, modificarse o utilizarse para
              finalidades distintas a la cotización sin autorización del titular o sin una
              causa legal aplicable.
            </p>

            <p>
              El acceso deberá limitarse únicamente a personal autorizado, como asesores
              comerciales, técnicos de instalación, personal administrativo, facturación o
              dirección. Cada persona deberá acceder solo a la información necesaria para
              cumplir su función.
            </p>

            <div className="mini-grid">
              <article>
                <h3>Medidas administrativas</h3>
                <p>
                  Políticas internas, capacitación, acuerdos de confidencialidad,
                  autorización de accesos y procedimientos para atender solicitudes de los
                  titulares.
                </p>
              </article>

              <article>
                <h3>Medidas técnicas</h3>
                <p>
                  Contraseñas seguras, cifrado, permisos por rol, respaldos, antivirus,
                  bitácoras de acceso y protección contra accesos no autorizados.
                </p>
              </article>

              <article>
                <h3>Medidas físicas</h3>
                <p>
                  Resguardo de documentos, control de acceso a oficinas, protección de
                  equipos, almacenamiento bajo llave y destrucción segura de información.
                </p>
              </article>
            </div>

            <h3>Derechos del titular</h3>
            <p>
              El titular de los datos podrá solicitar acceso, rectificación, cancelación u
              oposición respecto al tratamiento de su información personal. En un entorno
              real, la empresa debe proporcionar medios claros para ejercer estos derechos,
              como correo electrónico, oficina de atención o formulario oficial.
            </p>

            <h3>Transferencias de información</h3>
            <p>
              La información solo podría compartirse con terceros cuando sea necesario para
              atender la solicitud del cliente, por ejemplo, proveedores autorizados,
              técnicos de instalación, áreas de facturación, entidades de financiamiento o
              autoridades competentes, siempre bajo medidas de confidencialidad.
            </p>

            <h3>Deslinde de responsabilidad</h3>
            <p>
              Esta aplicación es una demostración académica. No representa una contratación
              real, no almacena información, no procesa archivos y no genera una oferta
              comercial vinculante. La cotización mostrada es aproximada y debe validarse
              mediante revisión técnica profesional.
            </p>

            <p>
              El usuario es responsable de proporcionar información correcta en un proceso
              real y de contar con autorización para compartir recibos de luz o documentos
              relacionados con el inmueble. En esta demo no se deben ingresar datos
              personales reales ni subir documentos verdaderos.
            </p>

            <p>
              Energías Renovables del Norte no será responsable por decisiones económicas,
              comerciales o técnicas tomadas con base en los resultados simulados de esta
              aplicación. Para una cotización formal se requiere revisión técnica,
              condiciones de instalación, tarifa eléctrica, ubicación exacta, materiales,
              permisos y evaluación especializada.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Energías Renovables del Norte · Cotización solar y manejo responsable de información</p>
      </footer>
    </div>
  );
}

export default App;