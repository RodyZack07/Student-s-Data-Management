import { createClient} from "@supabase/supabase-js";
import 'dotenv/config'


const url = process.env.SUPABASE_URL!
const anonKey = process.env.SUPABASE_ANON_KEY!

export const supabase =  createClient(url, anonKey,
    {
        auth:{

        }
    });

