export interface Notification {
    id: number;
    attributes: {
        notificationTitle: string;
        notificationContent: string;
    },
  }
  
  export interface ApiResponse {
    data: Notification[];
  }