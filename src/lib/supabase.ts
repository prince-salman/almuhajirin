import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dyzndejyjekwkitgcxht.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_3fCDCd2xsS3GMbx8UneiNg_K16wA5TW";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
