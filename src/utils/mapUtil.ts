import { supabase } from "./supabase";

// See https://zenn.dev/babyjob/articles/faef3346d367d2
export async function findNearSpot(coordinate: google.maps.LatLngLiteral) {
  let { data: spots, error } = await supabase
    .from('spots')
    .select('*');
}

//See https://blog.geolonia.com/2021/05/20/open-reverse-geocoder.html