export interface OfferProps {
  name: string;
  short_description: string;
  image_url: string;
}

export interface ComboProps {
  name: string;
  price: number;
  image_url: string;
}

export interface CityProps {
  name: string;
  properties: number;
  image_url: string;
}

export interface PropertyProps {
  name: string;
  image_url: string;
}

export interface DealProps {
  name: string;
  address: string;
  score: float;
  review_number: number;
  night_number: number;
  real_price: number;
  discount_price: number;
  is_genius: boolean;
  special_deal: string;
  image_url: string;
}

export interface Hotel {
  id: number;
  name: string;
  address: string;
  hotel_policy: string; // Example: "Check-in: 14:00, Check-out: 12:00, Cancellation: Free cancellation within 24 hours, Children Policy: Children under 12 stay free"
}

export interface HotelData {
  name: string;
  address: string;
  hotel_policy: string; // Example: "Check-in: 14:00, Check-out: 12:00, Cancellation: Free cancellation within 24 hours, Children Policy: Children under 12 stay free"
}

export interface Ticket {
  id: number; // ID vé (sử dụng kiểu số)
  ticket_type: string; // Ví dụ: "vé máy bay", "vé đi chơi"
  event_name: string; // Tên sự kiện hoặc điểm đến
  price: number; // Giá vé
}

interface TicketData {
  ticket_type: string; // Ví dụ: "vé máy bay", "vé đi chơi"
  event_name: string; // Tên sự kiện hoặc điểm đến
  price: number; // Giá vé
}
