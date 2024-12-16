import { Metadata } from 'next'
import { Stack, Divider, Typography, Link, Box } from '@mui/material'
import { StaffListing } from 'components/StaffListing'
import david from 'public/david-church-headshot.webp'
import serena from 'public/serena-church-headshot.webp'
import nathaniel from 'public/nathaniel-church-headshot.webp'
import hawi from 'public/hawi-church-headshot.webp'
import jacob from 'public/jacob-church-headshot.webp'
import jose from 'public/jose-church-headshot.webp'
import mark from 'public/mark-church-headshot.webp'

const staff = [
  {
    name: 'David Rannabargar',
    title: 'Lead Pastor',
    image: david,
    bio: 'Pastor David Rannabargar is married to his wife of 7 years (Tita) and is the proud dad of Kariss (4) and Charlee (2). David accepted the call to be Lead Pastor of Columbia View in 2020 and loves to journey with people in discovering belonging, faith, and formation in Jesus through the local church. In his spare time, he enjoys being with his kids building with magnet tiles, drinking really good coffee, going on hikes, and starting remodel projects around his home (sometimes even finishing them!)',
  },
  {
    name: 'Serena Rannabargar',
    title: 'Nursery and Missions Director',
    image: serena,
    bio: 'Serena, also known by friends as Tita, is the proud wife of David and mother of Kariss and Charlee. She grew up in Honduras (Central America) as a missionary kid and started following Jesus at a young age. She loves working with kids, helping them learn about Jesus and how to love one another. Her experience following Jesus internationally has added a ton of value to our church as we are located in one of the most diverse neighborhoods in Oregon (Rockwood.) As a follower of Jesus with an LCSW, she is grateful to steward her training in the mental health world as she helps others discover God’s incredible love for them. In her spare time, she and her family loves to adventure outdoors in the beautiful PNW!',
  },
  {
    name: 'Nathaniel Rodrigues',
    title: 'Worship Leader',
    image: nathaniel,
    bio: 'Nathaniel loves the ability for the body of Christ to worship with homogeneity of purpose and heterogeneity of expression. You may find him backpacking in the wilderness, composing music, or trying (and so far, failing) to make tepache. He loves living in Oregon City with his wife, recognizing that they are both subservient to their cats Rimsky and Bizet.',
  },
  {
    name: 'Hawi Jaldo',
    title: 'Outreach Coordinator',
    image: hawi,
    bio: "Hawi is committed to using her skillsets to positively impact vulnerable populations in our city. Growing up in a family of four, she learned the value of compassion, kindness, and empathy toward others. She serves as our church's Love INC. East Multnomah County board member. She also serves as a legal assistant for Immigrant Connection PDX, where she is blessed to weave together her faith and love for people, creating a meaningful and fulfilling career. In addition to her dedication to her work, she finds joy in the simple pleasures of life such as savoring a warm cup of chai, admiring the breathtaking sunsets, and wandering through fields of fragrant flowers.",
  },
  {
    name: 'Jacob Small',
    title: 'Worship Multimedia',
    image: jacob,
    bio: "Jacob Small is a faithful servant leader of Columbia view church. His service ranges from cleaning the gutters to dialing-in the Sunday morning worship experience. He is currently pursuing a christ-filled relationship with his girlfriend and loves bringing it up in conversation every 5 seconds. He currently works at a recreational van company, but is exploring career paths. One of Jacob's passions is to learn more about people's stories of God, philosophy, and everything in between. It should be noted, he can't help cracking a joke here and there. You will probably catch him at a food cart, ice cream shop, the river, or a scenic road driving leisurely.",
  },
  {
    name: 'Jose Mendoza',
    title: 'Facilities',
    image: jose,
    bio: 'Jose came to the states with his family from Mexico when he was four. He came to know Jesus in his early twenties and has a passion to be a good steward of the building and property that God has provided us. Jose is an avid gardener, growing several hundred of pounds of produce each year, sharing most of it with others. He also enjoys hiking, trips to the river, and spending time with his grown children.',
  },
  {
    name: 'Mark Kegbeh',
    title: 'Custodian',
    image: mark,
    bio: 'Mark came to the states from Liberia in 2019. He came to know Jesus, was baptized, and become a key member of our church in 2021. Mark enjoys painting and creating artwork as an expression of his love and worship to Jesus.  Mark has a particular heart and passion for prayer and adds a ton of value to the church through his prayer life.',
  },
]

export const metadata: Metadata = {
  title: 'About | Columbia View Church',
}

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: 1024,
      }}
    >
      <Typography component="h1" variant="h1" sx={{ mt: 5, mb: 3 }}>
        Welcome Home
      </Typography>
      <Typography
        component="h2"
        variant="h3"
        color="primary"
        sx={{
          mt: 4,
        }}
      >
        Our Vision
      </Typography>
      <Typography variant="h4" paragraph>
        Inviting our community to belong to Jesus, believe in Jesus, and become
        like Jesus.
      </Typography>
      <Box
        sx={{
          mt: 3,
          mx: { xs: 2, sm: 6 },
        }}
      >
        <Typography variant="h5">Belong</Typography>
        <Typography paragraph>
          We are a community building church. Community is God's idea and a
          reflection of His character. We seek to become the kind of faith
          community that welcomes people in whatever age and stage of life they
          are in to explore faith in the context of safe and loving community.
        </Typography>
        <Typography variant="h5">Believe</Typography>
        <Typography paragraph>
          We are a Bible teaching church. We believe The Bible is God's Word and
          the loving authority on all things related to life and eternity. We
          honor everyone's journey of faith and encourage people to believe in
          Jesus as their Lord and savior, becoming his apprentice.
        </Typography>
        <Typography variant="h5">Become</Typography>
        <Typography paragraph>
          We are a Bible practicing church. We believe the way and teachings of
          Jesus offer us a compelling vision of what it means to be remade as
          humans. We offer various opportunities for people to grow in their
          faith and apprenticeship to Jesus.
        </Typography>
      </Box>
      <Typography
        component="h2"
        variant="h3"
        color="primary"
        sx={{
          mt: 4,
        }}
      >
        Our Mission
      </Typography>
      <Typography
        variant="h4"
        paragraph
        sx={{
          my: 2,
        }}
      >
        Advancing the great commission, in the spirit of the great commandment,
        for the flourishing of the whole community.
      </Typography>
      <Typography paragraph>
        All are welcome to discover the God who made them, died for them, and
        who wants an ongoing, transformative, hope-giving relationship with
        them.
      </Typography>
      <Typography
        component="h2"
        variant="h3"
        color="primary"
        sx={{
          mt: 4,
        }}
      >
        Beliefs and Core Values
      </Typography>
      <Typography
        variant="h4"
        paragraph
        sx={{
          my: 2,
        }}
      >
        We believe in one God, who is Father, Son, and Holy Spirit, and the
        Savior of all who put their faith in Him alone for eternal life.
      </Typography>
      <Typography paragraph>
        <strong>We believe</strong> that those who are made new in Christ are
        called to be holy in character and conduct and can only live this way by
        being filled with the Lord’s Spirit.
      </Typography>
      <Typography paragraph>
        <strong>We believe</strong> in the Bible and its sufficiency to
        establish our faith and conduct.
      </Typography>
      <Typography paragraph>
        <strong>We believe</strong> God wills for people everywhere to know him
        and be made new in Christ.
      </Typography>
      <Typography paragraph>
        <strong>We believe</strong> that the purpose of the Church is to worship
        God in spirit and in truth, and to reach a lost and fallen world with
        the gospel of Jesus Christ through its worship, witness and loving
        deeds.
      </Typography>
      <Typography paragraph>
        These terms describe the “soul of the Church”:
      </Typography>
      <ul>
        <li>Biblical authority</li>
        <li>Christlikeness</li>
        <li>Disciple Making</li>
        <li>Local Church-Centered</li>
        <li>Servant Leadership</li>
      </ul>
      <Typography paragraph>
        {'For a comprehensive overview of Wesleyan beliefs, please visit '}
        <Link href="https://www.wesleyan.org/about/articles-of-religion">
          wesleyan.org
        </Link>
        .
      </Typography>
      <Typography
        component="h2"
        variant="h3"
        color="primary"
        sx={{
          mt: 4,
          mb: 2,
        }}
      >
        Annual Report
      </Typography>
      <Link href="https://drive.google.com/file/d/1onBcSt0pbj3mL4w2MWeaJKn_vjhaDJ25/view">
        View our 2022/2023 Annual Report
      </Link>
      <Typography component="h2" variant="h2" sx={{ my: 5 }}>
        Columbia View Staff
      </Typography>
      <Stack
        divider={
          <Divider orientation="horizontal" flexItem sx={{ color: 'blue' }} />
        }
        spacing={6}
        sx={{
          alignItems: 'center',
        }}
      >
        {staff.map((member) => (
          <StaffListing key={member.name} member={member} />
        ))}
      </Stack>
      <Typography
        component="h3"
        variant="h4"
        gutterBottom
        sx={{
          mt: 5,
        }}
      >
        Russelle Brandom
      </Typography>
      <Typography paragraph color="secondary">
        <strong>Kids Director</strong>
      </Typography>
      <Typography component="h3" variant="h4" gutterBottom>
        Johan Noya
      </Typography>
      <Typography paragraph color="secondary">
        <strong>Worship Leader</strong>
      </Typography>
      <Typography component="h3" variant="h4" gutterBottom>
        Linda Corrigan
      </Typography>
      <Typography gutterBottom color="secondary">
        <strong>Hospitality</strong>
      </Typography>
      <Typography
        sx={{
          mt: 5,
        }}
      >
        If you would like to get in contact with one of our staff, please email
        our office at:{' '}
        <a href="mailto:office.cvwc@gmail.com">office.cvwc@gmail.com</a>
      </Typography>
    </Box>
  )
}
