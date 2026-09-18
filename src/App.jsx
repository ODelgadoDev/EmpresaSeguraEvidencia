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

  const fechaPublicacion = '17 de septiembre de 2026';
  const fechaActualizacion = '17 de septiembre de 2026';
  const versionPoliticas = '1.0';
  const vigenciaPoliticas =
    'Vigente hasta que Energías Renovables del Norte publique una nueva versión o actualice sus procesos de tratamiento de datos.';

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
          <a href="#legal">Aviso y políticas</a>
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
                Consultar aviso de privacidad, políticas de servicio y deslinde
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
              <h2>Aviso de privacidad, políticas de servicio y deslinde</h2>
              <p>
                Condiciones aplicables al uso del cotizador solar, tratamiento de datos,
                carga de recibos CFE, confidencialidad y responsabilidad del usuario.
              </p>
            </div>
          </div>

          <div className="legal-box">
            <div className="policy-meta">
              <div>
                <strong>Fecha de publicación:</strong>
                <span>{fechaPublicacion}</span>
              </div>

              <div>
                <strong>Última actualización:</strong>
                <span>{fechaActualizacion}</span>
              </div>

              <div>
                <strong>Versión:</strong>
                <span>{versionPoliticas}</span>
              </div>

              <div>
                <strong>Vigencia:</strong>
                <span>{vigenciaPoliticas}</span>
              </div>
            </div>

            <div className="legal-intro">
              <h3>Aviso integral de Energías Renovables del Norte</h3>
              <p>
                Energías Renovables del Norte pone a disposición del usuario el presente
                aviso integral para informar cómo serán tratados los datos personales,
                datos de contacto, información energética y documentos proporcionados
                durante el proceso de solicitud de cotización de paneles solares.
              </p>
              <p>
                Al utilizar el formulario de cotización, cargar un recibo CFE o enviar
                información de contacto, el usuario reconoce que la información será
                utilizada para analizar su solicitud, preparar una propuesta preliminar y
                dar seguimiento al servicio solicitado.
              </p>
            </div>

            <h3>1. Identidad y domicilio del responsable</h3>
            <p>
              Para efectos de esta aplicación, Energías Renovables del Norte actúa como
              responsable del tratamiento de los datos personales proporcionados por el
              usuario. La empresa se dedica a la asesoría, cotización e instalación de
              sistemas de paneles solares para clientes residenciales, comerciales,
              empresariales e industriales.
            </p>
            <p>
              Domicilio demostrativo: Chihuahua, Chihuahua, México. Correo de atención
              comercial: cotizaciones@ern-demo.com. Correo para asuntos de privacidad:
              privacidad@ern-demo.com.
            </p>

            <h3>2. Alcance de estas políticas</h3>
            <p>
              Estas políticas aplican al uso del sitio web, formulario de cotización,
              apartado de carga de recibo CFE, formulario de contacto y cualquier
              comunicación relacionada con la solicitud de sistemas solares realizada a
              través de esta aplicación.
            </p>
            <p>
              No aplican a sitios externos, proveedores no autorizados, redes sociales,
              plataformas de terceros o comunicaciones ajenas a Energías Renovables del
              Norte.
            </p>

            <h3>3. Datos que Energías Renovables del Norte puede solicitar</h3>
            <p>
              Para procesar una solicitud de cotización, Energías Renovables del Norte
              puede solicitar nombre completo, teléfono, correo electrónico, ciudad, zona
              de instalación, dirección aproximada, tipo de cliente, consumo mensual en
              kWh, tarifa eléctrica, comentarios del proyecto y archivo del recibo CFE.
            </p>
            <p>
              Si el usuario decide avanzar a una contratación real, la empresa podría
              solicitar datos adicionales como razón social, RFC, domicilio fiscal,
              constancia de situación fiscal, datos de facturación, identificación del
              representante, información de pago y documentos relacionados con la
              instalación.
            </p>

            <h3>4. Uso específico del recibo CFE</h3>
            <p>
              El recibo CFE será utilizado únicamente para revisar información necesaria
              para dimensionar el proyecto solar: tarifa, consumo histórico, periodo de
              facturación, importe aproximado del servicio, número de servicio, domicilio
              del suministro y datos asociados al contrato eléctrico.
            </p>
            <p>
              Esta información permite estimar la capacidad del sistema fotovoltaico,
              calcular una cantidad aproximada de paneles solares, identificar el tipo de
              servicio eléctrico y preparar una propuesta técnica o comercial más
              adecuada.
            </p>
            <p>
              El recibo CFE no será utilizado para finalidades ajenas a la cotización, no
              será publicado, no será vendido y no será compartido con terceros no
              relacionados con el proyecto.
            </p>

            <h3>5. Finalidades principales del tratamiento</h3>
            <p>
              Energías Renovables del Norte utilizará los datos del usuario para atender
              la solicitud de cotización, analizar consumo eléctrico, preparar una
              estimación preliminar, contactar al solicitante, resolver dudas, validar
              datos del proyecto, programar visitas técnicas y dar seguimiento comercial
              o administrativo.
            </p>
            <p>
              En caso de contratación, los datos podrán utilizarse para preparar
              documentación técnica, coordinar instalación, generar órdenes de trabajo,
              emitir facturas, administrar pagos, gestionar garantías y conservar
              evidencia relacionada con el servicio contratado.
            </p>

            <h3>6. Finalidades secundarias</h3>
            <p>
              Energías Renovables del Norte podrá utilizar datos de contacto para enviar
              promociones, recordatorios de mantenimiento, encuestas de satisfacción,
              recomendaciones de ahorro energético o información sobre nuevos servicios
              solares.
            </p>
            <p>
              Estas finalidades secundarias no son necesarias para elaborar la cotización.
              El usuario puede solicitar que sus datos no sean utilizados para promociones
              o comunicaciones comerciales adicionales escribiendo al correo
              privacidad@ern-demo.com.
            </p>

            <h3>7. Base de consentimiento del usuario</h3>
            <p>
              Al marcar las casillas del formulario, el usuario manifiesta que conoce el
              aviso de privacidad, que autoriza el uso de sus datos para elaborar una
              cotización y que comprende que el recibo CFE puede contener información
              personal, domiciliaria, patrimonial y de consumo eléctrico.
            </p>
            <p>
              En un proceso real, si el usuario comparte documentación de una propiedad,
              empresa o servicio eléctrico que no esté a su nombre, declara contar con
              autorización suficiente para proporcionar esa información.
            </p>

            <h3>8. Confidencialidad de la información</h3>
            <p>
              Energías Renovables del Norte tratará como confidencial toda información
              proporcionada por el usuario, especialmente aquella que revele domicilio,
              consumo eléctrico, importes de pago, datos fiscales, datos de contacto,
              condiciones del inmueble, capacidad de consumo o información comercial.
            </p>
            <p>
              La empresa no venderá, publicará, divulgará ni utilizará los datos del
              usuario para finalidades distintas a las autorizadas, salvo obligación
              legal, requerimiento de autoridad competente o autorización expresa del
              titular.
            </p>

            <h3>9. Personal autorizado para acceder a la información</h3>
            <p>
              El acceso a la información estará limitado a personal que participe en la
              solicitud del cliente, como asesores comerciales, personal técnico,
              instaladores, administración, facturación, dirección y proveedores
              autorizados que intervengan directamente en el proyecto.
            </p>
            <p>
              Cada persona deberá acceder únicamente a la información necesaria para
              cumplir sus funciones. Por ejemplo, un asesor comercial puede revisar datos
              de contacto y consumo; un técnico puede revisar ubicación y condiciones de
              instalación; facturación puede revisar datos fiscales únicamente si el
              cliente avanza a contratación.
            </p>

            <div className="mini-grid">
              <article>
                <h3>Medidas administrativas</h3>
                <p>
                  Políticas internas de privacidad, capacitación del personal, acuerdos de
                  confidencialidad, asignación de responsables, autorización de accesos y
                  procedimientos para responder solicitudes de los clientes.
                </p>
              </article>

              <article>
                <h3>Medidas técnicas</h3>
                <p>
                  Control de contraseñas, permisos por rol, cifrado, respaldos, bitácoras
                  de acceso, antivirus, validación de archivos y protección contra accesos
                  no autorizados.
                </p>
              </article>

              <article>
                <h3>Medidas físicas</h3>
                <p>
                  Resguardo de documentos impresos, control de acceso a oficinas,
                  protección de equipos, almacenamiento bajo llave y destrucción segura de
                  expedientes.
                </p>
              </article>
            </div>

            <h3>10. Política de carga de archivos</h3>
            <p>
              Energías Renovables del Norte solo solicitará archivos relacionados con la
              cotización solar, principalmente recibos CFE en PDF, PNG o JPG. La empresa
              no solicitará contraseñas, claves bancarias, fotografías innecesarias,
              documentos personales no relacionados o información ajena al proyecto.
            </p>
            <p>
              En una implementación real, los archivos cargados serían revisados mediante
              controles de seguridad, límite de tamaño, validación de extensión, revisión
              contra archivos maliciosos, almacenamiento restringido y eliminación cuando
              ya no sean necesarios.
            </p>
            <p>
              En esta aplicación académica, el archivo seleccionado no se sube, no se
              procesa, no se almacena y no se envía a servidores. Solo se muestra el
              nombre del archivo para simular el flujo de carga.
            </p>

            <h3>11. Política de seguridad y ciberseguridad</h3>
            <p>
              Energías Renovables del Norte aplicará controles razonables para proteger
              la información contra pérdida, alteración, acceso no autorizado, uso
              indebido, divulgación o destrucción. Estos controles incluyen autenticación,
              permisos por rol, respaldo de información, cifrado cuando sea aplicable y
              revisión de accesos.
            </p>
            <p>
              La empresa no enviará solicitudes de datos sensibles por medios inseguros,
              no pedirá contraseñas del usuario y no solicitará pagos mediante enlaces
              sospechosos. Cualquier comunicación oficial deberá provenir de los canales
              de contacto publicados por la empresa.
            </p>
            <p>
              El usuario también debe proteger su información, evitando cargar documentos
              innecesarios, compartir archivos en equipos públicos o enviar recibos CFE a
              personas no autorizadas.
            </p>

            <h3>12. Transferencias de información</h3>
            <p>
              La información del usuario podrá compartirse únicamente cuando sea necesario
              para cumplir con el servicio solicitado. Esto puede incluir asesores
              técnicos, instaladores, proveedores autorizados, área de facturación,
              instituciones de financiamiento o autoridades competentes cuando exista
              obligación legal.
            </p>
            <p>
              Los terceros que participen en el proyecto deberán utilizar la información
              únicamente para la finalidad autorizada y mantener medidas de
              confidencialidad compatibles con estas políticas.
            </p>

            <h3>13. Conservación de información</h3>
            <p>
              La información de solicitudes no contratadas se conservará únicamente por el
              tiempo necesario para atender la cotización y el seguimiento comercial
              autorizado. La información de clientes contratados podrá conservarse por el
              tiempo necesario para cumplir obligaciones fiscales, administrativas,
              contractuales, de garantía o de soporte técnico.
            </p>
            <p>
              Cuando la información ya no sea necesaria, Energías Renovables del Norte
              deberá eliminarla, bloquearla o resguardarla conforme a sus políticas
              internas y obligaciones aplicables.
            </p>

            <h3>14. Derechos ARCO</h3>
            <p>
              El usuario podrá solicitar acceso a sus datos personales, rectificación si
              son incorrectos, cancelación cuando ya no sean necesarios u oposición al
              tratamiento para finalidades no indispensables.
            </p>
            <p>
              Para ejercer estos derechos, el usuario podrá enviar una solicitud al correo
              privacidad@ern-demo.com indicando nombre completo, medio de contacto, derecho
              que desea ejercer, descripción de la solicitud y, en un caso real, documento
              que acredite identidad o representación legal.
            </p>

            <h3>15. Revocación del consentimiento</h3>
            <p>
              El usuario puede solicitar que sus datos dejen de utilizarse para
              promociones, seguimiento comercial no necesario o comunicaciones secundarias.
              La revocación no impedirá que la empresa conserve información cuando sea
              necesaria para cumplir obligaciones legales, fiscales, administrativas o
              contractuales.
            </p>

            <h3>16. Términos de uso del cotizador</h3>
            <p>
              El cotizador de Energías Renovables del Norte genera una estimación
              preliminar basada en los datos ingresados por el usuario. El resultado no
              constituye una oferta definitiva, contrato, garantía de ahorro ni promesa de
              instalación.
            </p>
            <p>
              La capacidad sugerida del sistema, número de paneles, generación estimada y
              ahorro aproximado pueden cambiar después de revisar el recibo CFE completo,
              tarifa eléctrica, ubicación exacta, orientación, sombras, estructura del
              techo, materiales, permisos y condiciones eléctricas del inmueble.
            </p>

            <h3>17. Deslinde de responsabilidad</h3>
            <p>
              Energías Renovables del Norte no será responsable por decisiones económicas,
              comerciales o técnicas tomadas únicamente con base en la estimación generada
              por esta aplicación. Toda cotización formal requiere validación por personal
              especializado.
            </p>
            <p>
              La empresa no será responsable si el usuario proporciona información falsa,
              incompleta, desactualizada o si comparte documentos sobre los cuales no tiene
              autorización.
            </p>
            <p>
              En esta aplicación académica, los resultados son demostrativos. No se
              almacenan datos, no se procesan archivos, no se venden productos y no se
              establece una relación contractual real.
            </p>

            <h3>18. Responsabilidad del usuario</h3>
            <p>
              El usuario se compromete a proporcionar información correcta en un proceso
              real, no cargar documentos alterados, no compartir datos de terceros sin
              autorización y revisar el aviso de privacidad antes de enviar información.
            </p>
            <p>
              En esta versión académica, el usuario debe evitar ingresar datos personales
              reales, recibos verdaderos, documentos oficiales, contraseñas, datos
              bancarios o cualquier información confidencial.
            </p>

            <h3>19. Fecha de publicación, actualización y vigencia</h3>
            <p>
              Estas políticas fueron publicadas el {fechaPublicacion}, actualizadas por
              última vez el {fechaActualizacion} y corresponden a la versión{' '}
              {versionPoliticas}.
            </p>
            <p>
              Su vigencia se mantiene mientras Energías Renovables del Norte no publique
              una nueva versión. La empresa podrá actualizar estas políticas cuando cambien
              sus servicios, formularios, proveedores, finalidades de tratamiento, medidas
              de seguridad, procesos internos o disposiciones legales aplicables.
            </p>
            <p>
              Cuando exista una modificación relevante, la empresa deberá informar el
              cambio mediante este sitio web, correo electrónico, aviso visible en el
              formulario o cualquier otro medio de contacto disponible.
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