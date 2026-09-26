import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nnxfnpljxgttvbuhqryn.supabase.co';
const supabaseKey = 'sb_publishable_Mvvp5hIk5d84HWtTDihUtQ_NLrb_y6h';

export const supabase = createClient(supabaseUrl, supabaseKey);
