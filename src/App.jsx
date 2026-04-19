import React, { useState } from 'react';
import { 
  Calendar, 
  Gift, 
  Mail, 
  User, 
  Settings, 
  CheckCircle, 
  Send, 
  Award,
  ArrowRight,
  PartyPopper
} from 'lucide-react';

function FormView({ employeeData, handleInputChange, setCurrentView }) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-8">
      <div className="flex items-center gap-3 border-b pb-4 mb-6">
        <User className="text-indigo-600" size={32} />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Perfil de Empleado</h2>
          <p className="text-gray-500 text-sm">Cuéntanos sobre ti para celebrar tu día de forma especial.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input type="text" name="name" value={employeeData.name} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento</label>
            <input type="date" name="birthDate" value={employeeData.birthDate} onChange={handleInputChange} className="w-full p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Ingreso a la Empresa</label>
            <input type="date" name="startDate" value={employeeData.startDate} onChange={handleInputChange} className="w-full p-2 border rounded-md" />
            <p className="text-xs text-gray-400 mt-1">*Determina si recibes Giftcard ({'>'} 1 año)</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">¿Cuáles son tus Hobbies?</label>
          <input type="text" name="hobbies" value={employeeData.hobbies} onChange={handleInputChange} placeholder="Ej. Leer, Fútbol, Pintar..." className="w-full p-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Elige un estilo para tu felicitación</label>
          <select name="theme" value={employeeData.theme} onChange={handleInputChange} className="w-full p-2 border rounded-md">
            <option value="tech">Tecnológico / Geek 💻</option>
            <option value="nature">Naturaleza / Zen 🌿</option>
            <option value="coffee">Amante del Café ☕</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sobre mí (Breve descripción)</label>
          <textarea name="about" value={employeeData.about} onChange={handleInputChange} rows="3" className="w-full p-2 border rounded-md"></textarea>
        </div>

        <button onClick={() => setCurrentView('system')} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md hover:bg-indigo-700 transition flex justify-center items-center gap-2">
          Guardar Preferencias <CheckCircle size={18} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  // Estados de la aplicación
  const [currentView, setCurrentView] = useState('dashboard');
  
  // Datos simulados del empleado (se llenan en el formulario)
  const [employeeData, setEmployeeData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@empresa.com',
    birthDate: '1990-08-15',
    startDate: '2021-05-15', // Más de 1 año (recibe giftcard)
    hobbies: 'Videojuegos y Senderismo',
    theme: 'tech', // tech, nature, coffee
    about: 'Me encanta explorar nuevas tecnologías y los fines de semana me pierdo en la montaña.'
  });

  // Cálculo simple para saber si recibe Giftcard (simulamos que si es antes de 2023, tiene más de 1 año)
  const getsGiftCard = new Date(employeeData.startDate) < new Date('2023-01-01');

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  // Componente: Navegación Superior
  const NavBar = () => (
    <nav className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => setCurrentView('dashboard')}>
        <PartyPopper size={24} />
        <span>HappyWorkplace</span>
      </div>
      <div className="flex gap-4 text-sm">
        <button onClick={() => setCurrentView('form')} className={`hover:text-indigo-200 ${currentView === 'form' ? 'border-b-2' : ''}`}>1. Formulario</button>
        <button onClick={() => setCurrentView('system')} className={`hover:text-indigo-200 ${currentView === 'system' ? 'border-b-2' : ''}`}>2. Sistema DB</button>
        <button onClick={() => setCurrentView('inbox')} className={`hover:text-indigo-200 ${currentView === 'inbox' ? 'border-b-2' : ''}`}>3. Correos</button>
      </div>
    </nav>
  );

  // Vista 2: Simulación del Sistema (Base de datos y Calendario)
  const SystemView = () => (
    <div className="max-w-3xl mx-auto mt-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Simulador del Sistema (Backend)</h2>
      
      <div className="flex justify-center items-center gap-8 mb-12">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-48">
          <Settings className="text-gray-400 mb-2" size={48} />
          <h3 className="font-bold">Base de Datos</h3>
          <p className="text-xs text-gray-500 mt-2">1 empleado registrado</p>
        </div>
        <ArrowRight className="text-gray-300" size={32} />
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md w-48 border-2 border-indigo-500">
          <Calendar className="text-indigo-500 mb-2" size={48} />
          <h3 className="font-bold">Cron</h3>
          <p className="text-xs text-gray-500 mt-2">Verificando fechas...</p>
        </div>
      </div>

      <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
        <p className="text-lg mb-4">¡Hoy es el cumpleaños de <strong>{employeeData.name}</strong>!</p>
        <p className="text-sm text-gray-600 mb-6">
          Tiempo en la empresa: {getsGiftCard ? <span className="text-green-600 font-bold">Aplica para Giftcard (Más de 1 año)</span> : <span className="text-orange-500">No aplica para Giftcard (Menos de 1 año)</span>}
        </p>
        <button onClick={() => setCurrentView('inbox')} className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 flex items-center gap-2 mx-auto shadow-lg transition transform hover:scale-105">
          <Send size={20} /> Ejecutar Eventos de Cumpleaños
        </button>
      </div>
    </div>
  );

  // Vista 3: Bandeja de Entrada de Correos
  const InboxView = () => {
    const [activeTab, setActiveTab] = useState('employee'); // 'employee' or 'team'

    return (
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Sidebar de la bandeja */}
        <div className="w-64 bg-gray-50 border-r p-4">
          <div className="font-bold text-gray-700 mb-6 flex items-center gap-2"><Mail /> Bandeja de Entrada</div>
          <ul className="space-y-2">
            <li onClick={() => setActiveTab('employee')} className={`p-3 rounded-md cursor-pointer transition ${activeTab === 'employee' ? 'bg-indigo-100 text-indigo-800 font-medium border-l-4 border-indigo-600' : 'hover:bg-gray-200'}`}>
              <div className="text-sm">Para: {employeeData.name}</div>
              <div className="text-xs text-gray-500 truncate">¡Feliz Cumpleaños! 🎉</div>
            </li>
            <li onClick={() => setActiveTab('team')} className={`p-3 rounded-md cursor-pointer transition ${activeTab === 'team' ? 'bg-indigo-100 text-indigo-800 font-medium border-l-4 border-indigo-600' : 'hover:bg-gray-200'}`}>
              <div className="text-sm">Para: Toda la Empresa</div>
              <div className="text-xs text-gray-500 truncate">Hoy celebramos a {employeeData.name}</div>
            </li>
          </ul>
        </div>

        {/* Contenido del correo */}
        <div className="flex-1 p-8 bg-gray-50">
          {activeTab === 'employee' ? (
            // Correo Privado (Empleado)
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <div className="border-b pb-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">¡Feliz Cumpleaños, {employeeData.name}! 🎂</h2>
                <p className="text-gray-500 text-sm mt-1">De: Recursos Humanos &lt;rrhh@empresa.com&gt;</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Hola {employeeData.name},</p>
                <p>¡Todo el equipo te desea un excelente día en tu cumpleaños! Esperamos que tengas tiempo hoy para disfrutar de lo que más te gusta: <strong>{employeeData.hobbies}</strong>.</p>
                
                {getsGiftCard && (
                  <div className="my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
                    <Gift className="text-yellow-500 mx-auto mb-2" size={48} />
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">¡Aquí tienes tu Regalo!</h3>
                    <p className="text-yellow-700 mb-4">Como llevas más de 1 año con nosotros, te enviamos esta Gift Card para que la disfrutes.</p>
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-md font-bold hover:bg-yellow-600">Canjear Gift Card de $50</button>
                  </div>
                )}
                
                <p>Gracias por ser parte de nuestra familia.</p>
                <p>Atentamente,<br/>El Equipo de HappyWorkplace</p>
              </div>
            </div>
          ) : (
            // Correo General (Empresa)
            <div className="bg-white border rounded-lg p-8 shadow-sm">
              <div className="border-b pb-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">🎈 ¡Hoy es el cumpleaños de {employeeData.name}!</h2>
                <p className="text-gray-500 text-sm mt-1">De: Recursos Humanos &lt;rrhh@empresa.com&gt;</p>
                <p className="text-gray-500 text-sm">Para: all-employees@empresa.com</p>
              </div>
              <div className="space-y-4 text-gray-700 text-center">
                <PartyPopper className="text-indigo-500 mx-auto mb-4" size={64} />
                <p className="text-lg">¡Es momento de celebrar!</p>
                <p>Hoy queremos felicitar a <strong>{employeeData.name}</strong> en su día especial.</p>
                
                <div className="my-6">
                  <p className="text-md font-medium text-indigo-600 mb-2">Lo que más le gusta a nuestro celebrado de hoy es:</p>
                  <div className="bg-indigo-50 p-4 rounded-md italic text-sm max-w-md mx-auto border-l-4 border-indigo-400 shadow-sm">
                    " {employeeData.about} "
                  </div>
                </div>

                <p>Haz clic en el botón de abajo para dejarle un mensaje personalizado.</p>
                
                <div className="mt-8">
                  {/* Este botón simula el enlace que redirige a la landing page */}
                  <button onClick={() => setCurrentView('greeting')} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-700 shadow-md transform hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                    Ir a Saludar a {employeeData.name} <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Vista 4: Landing Page Personalizada de Saludos
  const GreetingPage = () => {
    // Definimos estilos basados en el tema elegido por el empleado en el onboarding
    const themeStyles = {
      tech: { bg: 'bg-slate-900', text: 'text-green-400', card: 'bg-slate-800 border-green-500', icon: '💻' },
      nature: { bg: 'bg-green-50', text: 'text-green-800', card: 'bg-white border-green-300', icon: '🌿' },
      coffee: { bg: 'bg-amber-50', text: 'text-amber-900', card: 'bg-white border-amber-200', icon: '☕' }
    };
    const currentTheme = themeStyles[employeeData.theme] || themeStyles.tech;

    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    return (
      <div className={`min-h-screen ${currentTheme.bg} p-8 flex flex-col items-center justify-center font-sans`}>
        <div className={`max-w-2xl w-full p-8 rounded-2xl shadow-2xl border-t-4 ${currentTheme.card} ${currentTheme.text} text-center transition-all duration-500`}>
          <div className="text-6xl mb-4">{currentTheme.icon}</div>
          <h1 className="text-4xl font-black mb-2">¡Feliz Cumpleaños, {employeeData.name}!</h1>
          <p className="text-lg opacity-80 mb-8">Sabemos que te encanta: {employeeData.hobbies}. ¡Esperamos que hoy sea un día increíble!</p>

          {!sent ? (
            <div className="text-left bg-white/10 p-6 rounded-xl">
              <label className="block font-bold mb-2">Déjale un mensaje a tu compañero:</label>
              <textarea 
                className="w-full p-3 rounded-md text-gray-800 bg-white shadow-inner mb-4 focus:outline-none focus:ring-2" 
                rows="4" 
                placeholder="Escribe tus felicitaciones aquí..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button 
                onClick={() => setSent(true)}
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
              >
                Enviar Saludo <Send size={18} />
              </button>
            </div>
          ) : (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl border border-green-200 animate-pulse">
              <CheckCircle className="mx-auto mb-2" size={48} />
              <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
              <p>Tu saludo ha sido añadido al mural virtual de {employeeData.name}.</p>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-opacity-20 flex justify-center">
             <button onClick={() => setCurrentView('inbox')} className="text-sm underline opacity-70 hover:opacity-100">
               Volver a mi bandeja de entrada
             </button>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Inicial (Navegación general para la presentación)
  const Dashboard = () => (
    <div className="max-w-4xl mx-auto mt-12 text-center">
      <PartyPopper className="text-indigo-600 mx-auto mb-6" size={80} />
      <h1 className="text-5xl font-black text-gray-800 mb-4">Proyecto: Cumpleaños App</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Un flujo automatizado para felicitar a los empleados, enviarles gift cards según su antigüedad y fomentar la interacción del equipo.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div onClick={() => setCurrentView('form')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition border-t-4 border-blue-500">
          <User className="text-blue-500 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">1. Onboarding</h3>
          <p className="text-gray-500 text-sm">El empleado llena sus datos, preferencias y fecha de ingreso.</p>
        </div>
        
        <div onClick={() => setCurrentView('system')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition border-t-4 border-indigo-500">
          <Calendar className="text-indigo-500 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">2. Lógica del Sistema</h3>
          <p className="text-gray-500 text-sm">La app detecta el cumpleaños y decide si entregar la Giftcard.</p>
        </div>

        <div onClick={() => setCurrentView('inbox')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition border-t-4 border-green-500">
          <Mail className="text-green-500 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">3. Correos & Saludos</h3>
          <p className="text-gray-500 text-sm">Visualiza el correo privado y el correo a la empresa con el botón de "Saludar".</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {currentView !== 'greeting' && <NavBar />}
      
      <div className="pb-12">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'form' && (
          <FormView
            employeeData={employeeData}
            handleInputChange={handleInputChange}
            setCurrentView={setCurrentView}
          />
        )}
        {currentView === 'system' && <SystemView />}
        {currentView === 'inbox' && <InboxView />}
        {currentView === 'greeting' && <GreetingPage />}
      </div>
    </div>
  );
}