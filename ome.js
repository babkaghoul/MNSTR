import { createClient } from '@supabase/supabase-js'; 
     
     

const supabaseUrl = 'https://pmujergqrtpzbowthaar.supabase.co'; // Замените на ваш URL 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWplcmdxcnRwemJvd3RoYWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3OTQ5OTgsImV4cCI6MjA0MzM3MDk5OH0.7rKSsnLCuep6gwCYhpuszWl9NvX2sHKMWbh7xdcge84'; // Замените на ваш ключ
const supabase = createClient(supabaseUrl, supabaseKey);



