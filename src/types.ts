
export interface Hero {
  message : string
  img_path : string
}

export interface VideoDetails {
  url : string
  thumbnail_path : string
}

export interface Donation {
  url : string
  prompt : string
  pitch : string
}

export interface EngageItem {
  url : string
  prompt : string
}

export interface Engage {
  pitch : string
  items : EngageItem[]
}

export interface AppContent {
  hero : Hero
  video : VideoDetails
  donate : Donation
  engage : Engage
}