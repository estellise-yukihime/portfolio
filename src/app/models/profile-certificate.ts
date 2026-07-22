export type ProfileCertificate = {
  id: number
  profile_id: number
  name: string | null
  issuer: string | null
  proof: string | null
  issued_at: string | null
}
