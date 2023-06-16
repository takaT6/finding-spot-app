export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json; }
    | Json[];

export interface Database {
    public: {
        Tables: {
            genres: {
                Row: {
                    genre: string;
                    id: number;
                };
                Insert: {
                    genre: string;
                    id?: number;
                };
                Update: {
                    genre?: string;
                    id?: number;
                };
            };
            spot_genre: {
                Row: {
                    genre_id: number;
                    spot_id: number;
                };
                Insert: {
                    genre_id: number;
                    spot_id: number;
                };
                Update: {
                    genre_id?: number;
                    spot_id?: number;
                };
            };
            spots: {
                Row: {
                    address1: string | null;
                    address2: string | null;
                    address3: string | null;
                    area: number | null;
                    business_hours: string | null;
                    created_at: string | null;
                    description: string | null;
                    genre: number[] | null;
                    id: number;
                    latitude: number | null;
                    longitude: number | null;
                    name: string | null;
                    parking_info: number | null;
                    photo: string | null;
                    postal_code: string | null;
                    rating: number | null;
                    recommended_point: string | null;
                    regular_holiday: string | null;
                    review: string | null;
                    updated_at: string | null;
                    website_url: string | null;
                };
                Insert: {
                    address1?: string | null;
                    address2?: string | null;
                    address3?: string | null;
                    area?: number | null;
                    business_hours?: string | null;
                    created_at?: string | null;
                    description?: string | null;
                    genre?: number[] | null;
                    id?: number;
                    latitude?: number | null;
                    longitude?: number | null;
                    name?: string | null;
                    parking_info?: number | null;
                    photo?: string | null;
                    postal_code?: string | null;
                    rating?: number | null;
                    recommended_point?: string | null;
                    regular_holiday?: string | null;
                    review?: string | null;
                    updated_at?: string | null;
                    website_url?: string | null;
                };
                Update: {
                    address1?: string | null;
                    address2?: string | null;
                    address3?: string | null;
                    area?: number | null;
                    business_hours?: string | null;
                    created_at?: string | null;
                    description?: string | null;
                    genre?: number[] | null;
                    id?: number;
                    latitude?: number | null;
                    longitude?: number | null;
                    name?: string | null;
                    parking_info?: number | null;
                    photo?: string | null;
                    postal_code?: string | null;
                    rating?: number | null;
                    recommended_point?: string | null;
                    regular_holiday?: string | null;
                    review?: string | null;
                    updated_at?: string | null;
                    website_url?: string | null;
                };
            };
        };
        Views: {
            [_ in never]: never
        };
        Functions: {
            [_ in never]: never
        };
        Enums: {
            [_ in never]: never
        };
        CompositeTypes: {
            [_ in never]: never
        };
    };
}
