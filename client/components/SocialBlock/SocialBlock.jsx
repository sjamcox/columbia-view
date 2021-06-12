import { FacebookFilled, InstagramFilled, TwitterSquareFilled, YoutubeFilled } from '@ant-design/icons'

export const SocialBlock = ({ links }) => {

  const { facebookUrl, instagramUrl, twitterUrl, youtubeUrl } = links

  return (
    <ul className='socialBlock'>
      {facebookUrl &&
        <li>
          <a href={facebookUrl} target='_blank'>
            <FacebookFilled className='socialIcon' />
          </a>
        </li>
      }
      {instagramUrl &&
        <li>
          <a href={instagramUrl} target='_blank'>
            <InstagramFilled className='socialIcon' />
          </a>
        </li>
      }
      {twitterUrl &&
        <li>
          <a href={twitterUrl} target='_blank'>
            <TwitterSquareFilled className='socialIcon' />
          </a>
        </li>
      }
      {youtubeUrl &&
        <li>
          <a href={youtubeUrl} target='_blank'>
            <YoutubeFilled className='socialIcon' />
          </a>
        </li>
      }
    </ul>
  )
}