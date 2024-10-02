        // supabase.js
        const initSupabase = () => {
            const supabaseUrl = 'https://pmujergqrtpzbowthaar.supabase.co';
            const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWplcmdxcnRwemJvd3RoYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3OTQ5OTgsImV4cCI6MjA0MzM3MDk5OH0.7rKSsnLCuep6gwCYhpuszWl9NvX2sHKMWbh7xdcge84'; 

            const supabase = new Supabase(supabaseUrl, supabaseKey);

            // Ваш код, работающий с Supabase
            supabase
                .from('users') 
                .select('*')
                .then(data => {
                    console.log(data.data); 
                })
                .catch(error => {
                    console.error(error);
                });
        };

        // Вызовите функцию initSupabase() после загрузки библиотеки Supabase
        window.addEventListener('load', initSupabase);