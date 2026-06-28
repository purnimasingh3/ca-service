import React from 'react';
import { Shield, Users, TrendingUp, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  // Team Data
  const team = [
    {
      name: 'Anchal Tiwari',
      role: 'Founder of Fintax Adviser',
      image: "assets/anchal.jpeg ",
    },
    {
      name: 'Mohit Gauhan',
      role: 'Co-Founder (CFO)',
      image: "/assets/gaugansahib.jpeg",
    },
    // {
    //   name: 'Marcus Vance',
    //   role: 'Chief Executive Officer (CEO)',
    //   bio: 'Marcus drives the operational growth and digital transformation strategies that keep FinTax at the cutting edge of FinTech.',
    //   image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    //   linkedin: '#',
    //   email: 'marcus@fintax.com'
    // }
  ];

  // Core Values Data
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Uncompromising Integrity',
      description: 'Financial clarity requires absolute trust. We uphold the highest ethical standards in every calculation and consultation.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Client-Centric Growth',
      description: 'Your success is our metric. We tailor financial frameworks specifically designed to scale your unique business model.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Forward-Thinking Strategy',
      description: 'We don’t just look at past quarters. We anticipate tax code shifts and market trends to keep you steps ahead.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">

      {/* Hero Section */}
      <section className="bg-sky-50 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-700 font-semibold tracking-wider uppercase text-sm">About FinTax Adviser</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 tracking-tight text-slate-900">
            Demystifying Finance. <br className="hidden sm:inline" />Empowering Innovation.
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We are a team of financial strategists, tax experts, and tech enthusiasts dedicated to simplifying financial operations for modern enterprises.
          </p>

        </div>

      </section>
      <div className="mt-8 flex justify-center">
        <p className="mt-6 text-md text-blue-800 italic">
          * Fintax Adviser is a private consultancy firm providing professional
          assistance services and is not affiliated with any Government authority
          or agency.
        </p>
      </div>

      {/* Our Mission & Stats */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-950 mb-4">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Navigating the intersection of tax compliance and corporate finance shouldn't hold your business back. At FinTax Adviser, we build the robust financial foundations startups and enterprises need to scale confidently.
          </p>
          <p className="text-slate-600 leading-relaxed">
            By combining deep regulatory expertise with modern digital solutions, we transform tax season from a stressor into a strategic advantage.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <p className="text-4xl font-extrabold text-blue-600">₹20M+</p>
            <p className="text-sm font-medium text-slate-500 mt-1">Tax Savings Managed</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">200+</p>
            <p className="text-sm font-medium text-slate-500 mt-1">Startups trust Us</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">98%</p>
            <p className="text-sm font-medium text-slate-500 mt-1">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">15+</p>
            <p className="text-sm font-medium text-slate-500 mt-1">Years of Financial Excellence</p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 max-w-6xl mx-auto" />

      {/* Core Values Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-950">The Values That Guide Us</h2>
          <p className="text-slate-500 mt-2">How we ensure excellence in everything we do.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-2">{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-slate-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-950">Meet Our Leadership</h2>
            <p className="text-slate-500 mt-2">The strategic minds behind Fintax Adviser.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full mx-w-[360px] mx-suto">
                {/* Image Wrap */}
                <div className="h-[270]  overflow-hidden relative bg-slate-100 flex justify-center item-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[300px] h-[300px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-950">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-600 mb-4">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">
              Our Team
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              Meet Our Experts
            </h2>

            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              Experienced professionals dedicated to helping your business grow with confidence.
            </p> <br />
            10+ year team experience
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Member 1 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-200">

              <div className="flex justify-center pt-8">
                <img
                  src="/assets/arunsharma.jpeg"
                  alt="Arun Sharma"
                  className="w-52 h-52 object-cover rounded-2xl"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  Arun Sharma
                </h3>
              </div>
            </div>

            {/* Member 2 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-200">

              <div className="flex justify-center pt-8">
                <img
                  src="assets/saksham.jpeg"
                  alt="saksham"
                  className="w-52 h-52 object-cover rounded-2xl"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  Saksham Tiwari
                </h3>

              </div>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-200">

              <div className="flex justify-center pt-8">
                <img
                  src="/assets/jagatbisht.jpeg"
                  alt="Team Member"
                  className="w-52 h-52 object-cover rounded-2xl"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  Jagat Bisht
                </h3>
                {/* <div className="mt-5 space-y-2 text-slate-600 text-sm">
            <p>🎓 B.Com hons</p>
          </div> */}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-950 mb-4">Ready to optimize your financial strategy?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Let’s set up a consultation call to see how FinTax Adviser can clean up your books and save you money.
        </p>
        <Link href="https://calendly.com/fintaxadviser-info/30min" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-sm hover:shadow transition-all">
          Schedule a Strategy Session
        </Link>
      </section>

    </div>
  );
}