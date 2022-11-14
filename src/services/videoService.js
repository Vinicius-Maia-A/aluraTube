import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://lzfgtyzqzzrfocwmtiew.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Zmd0eXpxenpyZm9jd210aWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNzE2NjcsImV4cCI6MTk4Mzk0NzY2N30.imydmimEWaxqM03LR5_bNCZ6mbLDdIcWWdqin_18VGs'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")  
                    .select('*')
        }
    }
}