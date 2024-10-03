// supabase.js
const supabaseUrl = 'https://pmujergqrtpzbowthaar.supabase.co'; // Ваш URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWplcmdxcnRwemJvd3RoYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3OTQ5OTgsImV4cCI6MjA0MzM3MDk5OH0.7rKSsnLCuep6gwCYhpuszWl9NvX2sHKMWbh7xdcge84'; // Ваш ключ API Supabase

const initSupabase = () => {
  // Создайте экземпляр Supabase внутри функции
  const supabase = new Supabase(supabaseUrl, supabaseKey); 

  // Теперь мы можем использовать supabase!
  supabase
    .from('users') // Замените 'users' на название вашей таблицы
    .select('*')
    .then(data => {
      console.log(data.data);
    })
    .catch(error => {
      console.error(error);
    });
};

// Вызываем initSupabase() после загрузки Supabase-JS
window.addEventListener('load', initSupabase);
