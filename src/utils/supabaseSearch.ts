import { supabase } from "@/utils/supabase";

export async function getFilteredSpotsData(genrecd: number, areacd: number) {
  console.log("func getFilteredSpotsData");
  let query = supabase.from('spots').select('*');

  if (areacd) query = query.eq('area', areacd);
  if (genrecd) query = query.contains('genre', [genrecd]);

  let { data: spots, error } = await query;

  console.log(spots);
  return spots;
};