import whatWeDo from '../styles/whatWeDo.module.scss'

export default function WhatWeDo() {

  return (
    <section className={ whatWeDo.container }>
      <h2 className={ whatWeDo.header }>What we do:</h2>
      <img className={ whatWeDo.image } src="/what_we_do.jpeg" alt="what we do picture"/>
      <div className={ whatWeDo.content }>
        <p>
          Since 27.2 . 2022, the tubman.network and their alliance partners have supported more than 1700 people of
          African and Afro-diasporic origin and BiPoC with a warm welcome, temporary accommodation, hot meals, hygiene
          items, legal advice and medical consultations with about 15 doctors with about 20 translators.
        </p>
        <p>
          In addition, 140 students are already enrolled in a certified German course (A1-C1) from Monday to Friday with
          childcare, so that parents with young children can also access the course. We offer creative therapy sessions
          for trauma-related symptoms and vocational counselling for refugees as well as hosts. The weekly sessions for
          children and their families are well attended.
        </p>
        <p>
          A documentary film illustrating the numerous human rights violations, racism and discrimination and the demand
          of Amnesty International is in progress.
        </p>
        <p>
          A welcome party is held on the last Saturday of the month, last month attended by more than 300 people.
        </p>
        <p>
          We have already received and responded to more than 4000 mails via help@tubman.network, all on a voluntary
          basis.
        </p>
        <p>
          We sometime still have about up to 100 people arriving daily, desperate for places to sleep, lacking the
          opportunity to wash and the need for food is slowly but surely exceeding our capacity.
        </p>
        <p>
          In the coming months we expect more families, many more sick and wounded. We urgently need funds to cover the
          basic needs of people and for 8 coordinators who can provide expert guidance to the approximately 600
          volunteers.
        </p>
        <p>
          Please also support us in your family and professional networks.
        </p>
      </div>
    </section>
  )
}