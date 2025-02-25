import { Box } from '@mui/material'

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      sx={{
        mb: 5,
        px: '4vw',
        minHeight: '90vh',
      }}
    >
      {children}
    </Box>
  )
}
