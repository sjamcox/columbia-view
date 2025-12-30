type PartnerTileProps = {
  name: string
  subtitle?: string
  children?: React.ReactNode
}

function PartnerTile({ name, subtitle, children }: PartnerTileProps) {
  return (
    <div className="flex flex-col">
      <div className="text-white/80 px-4 pb-4">
        <p className="text-white font-display text-3xl font-semibold">
          {name}
        </p>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children && (
        <div className="from-primary-light-blue to-secondary-aqua rounded-xl bg-linear-to-r p-0.5 text-base">
          <div className="rounded-xl bg-white p-5 text-base">{children}</div>
        </div>
      )}
    </div>
  )
}

export default function PartnerList() {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <div className="max-w-3xl">
        <PartnerTile
          name="Columbia View Church"
          subtitle="Host Church of Immigrant Connection PDX"
        >
          <p className="mb-3 italic">
            “Immigrant Connection PDX was very good to me because they explained
            to me what I needed to submit to USCIS with no delay. They are there
            anytime I need them for any questions about my application. They
            also support clients with scholarships, which I benefitted from.
            It’s very helpful for me to work with them.”
          </p>
          <p>—Columbia View Member & ICPDX Client</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl self-end">
        <PartnerTile name="Immigrant Connection">
          <p className="mb-3 italic">
            "Immigrant Connection PDX has been a trailblazer for our
            organization’s vision and values in the Northwest, setting the
            standard for loving welcome and innovative excellence throughout
            Portland. They stand as a beacon of welcome, actively serving and
            empowering immigrant families and leading the way in fostering a
            vibrant, supportive community where everyone can thrive. Over the
            first four years, we have seen remarkable growth in service and
            impact.
          </p>
          <p className="mb-3 italic">
            Looking ahead, we eagerly anticipate the continued influence of
            ICPDX as it reaches and uplifts thousands more families in the years
            to come."
          </p>
          <p>
            —Pastor Zach Szmara, Immigrant Connection Founder & Executive
            Director
          </p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl">
        <PartnerTile
          name="Grace Community Church — Comunidad de Gracia"
          subtitle="Over $25,000 in scholarships for qualifying clients"
        >
          <p className="mb-3 italic">
            "We felt God nudging us to help those in our community who were
            getting assistance with citizenship. ICPDX has allowed us to follow
            the biblical mandate to love the sojourner in our midst."
          </p>
          <p>—Gerry Smith, GCC Pastor</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl self-end">
        <PartnerTile name="Gresham Bible Church">
          <p className="italic">
            "We love ICPDX and the way they tangibly help our neighbors with
            kindness and dignity."
          </p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl">
        <PartnerTile
          name="River West Church"
          subtitle="Provided capacity building grant and client referrals"
        >
          <p className="mb-3 italic">
            "Our church community is not only proud to support the work the
            ICPDX is doing but we're also overjoyed to get a front-row seat to
            the impact these legal resources are making for so many immigrants
            and refugees in our community!"
          </p>
          <p>—Chris Coffman, River West Pastor</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl self-end">
        <PartnerTile
          name="Chown Real Estate"
          subtitle="Supplied a raffle basket"
        >
          <p className="italic">
            "Chown Real Estate is honored to support the exceptional leadership
            and mission of ICPDX, which provides practicaland life changing
            support to many of the newest members of our community."
          </p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl">
        <PartnerTile name="Love INC East Multnomah County">
          <p className="mb-3 italic">
            "Immigrant Connection PDX is exactly the type of organization I look
            forward to working with in service to the community. Together in
            service to the diverse, intangible needs of the people, we can
            empower our neighbors to develop the community we are all proud to
            call home."
          </p>
          <p>—Latoya Price-Seawood, Founding Board Member</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl self-end">
        <PartnerTile name="Parklane Christian Reformed Church">
          <p className="mb-3 italic">
            "I am so thankful for the work and ministryof Immigrant Connection
            PDX in our community. This is a deeply needed work in our
            neighborhood that serves our brothers and sisters who are in
            difficult situations. Please join me in praying for and supporting
            this ministry."
          </p>
          <p>—Pastor Pete Armstrong</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl">
        <PartnerTile name="Rockwood CDC" subtitle="Client referrals">
          <p className="mb-3 italic">
            "What is so impressive to me about ICPDX is that they meet the
            urgent needs of vulnerable people in a way that is practical and
            humble."
          </p>
          <p>—President of the Rockwood Community Development Corporation</p>
        </PartnerTile>
      </div>
      <div className="max-w-3xl self-end">
        <PartnerTile
          name="Immigration Law Resource Center"
          subtitle="Immigration law training and support"
        />
      </div>
      <div className="max-w-3xl">
        <PartnerTile name="Faithful Friends PDX" subtitle="Client referrals">
          <p className="mb-3 italic">
            "Our city is blessed to be hosts to so many who have chosen to live,
            work and make a life in our great city. As a church-based,
            community-focused non profit ourselves, we get it. We are so
            grateful to the important work ICPDX does to help our friends from
            around the globe become like family across the street."
          </p>
          <p>—Tim Cowley, Director of Operations</p>
        </PartnerTile>
      </div>
    </div>
  )
}
