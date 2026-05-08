"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="medium"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Pricing",          id: "pricing"},
      ]}
      brandName="Parfait"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Parfait"
      description="Redéfinissez la précision avec l'intelligence artificielle la plus élégante du marché. Une puissance brute, servie avec une simplicité totale."
      buttons={[
        {
          text: "Demander une démo",          href: "#contact"},
        {
          text: "Découvrir la technologie",          href: "#features"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=s65xqk"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="L'excellence en chiffres"
      metrics={[
        {
          icon: Zap,
          label: "Vitesse d'exécution",          value: "0.4ms"},
        {
          icon: Shield,
          label: "Précision validée",          value: "99.9%"},
        {
          icon: Award,
          label: "Clients satisfaits",          value: "500+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Prédictions instantanées",          tag: "IA",          description: "Obtenez des résultats complexes en une fraction de seconde grâce à notre moteur dopé à l'IA.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xznn8a"},
        {
          id: "f2",          title: "Design adaptatif",          tag: "UX",          description: "L'outil apprend de vos habitudes pour vous proposer une expérience sur mesure au fil du temps.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n5rvw5"},
        {
          id: "f3",          title: "Sécurité native",          tag: "Security",          description: "Vos données restent privées avec notre architecture de chiffrement de bout en bout.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0ag9v6"},
      ]}
      title="Une interface qui disparaît"
      description="Nous avons supprimé la complexité pour que vous puissiez vous concentrer sur l'essentiel."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          name: "Parfait Analytics",          price: "149€",          variant: "Premium",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ku5q0t"},
        {
          id: "p2",          name: "Parfait Connect",          price: "99€",          variant: "Standard",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4t5do2"},
        {
          id: "p3",          name: "Parfait Studio",          price: "299€",          variant: "Pro",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xu60qu"},
        {
          id: "p4",          name: "Parfait Cloud",          price: "199€",          variant: "Enterprise",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cxmyni"},
        {
          id: "p5",          name: "Parfait Flow",          price: "49€",          variant: "Light",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3w23ow"},
        {
          id: "p6",          name: "Parfait Logic",          price: "399€",          variant: "Expert",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=gumm8o"},
      ]}
      title="Nos modules"
      description="Optimisez chaque facette de votre activité numérique."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "85%",          title: "Gain de productivité",          items: [
            "Automatisation totale",            "Réduction des erreurs"],
        },
        {
          id: "m2",          value: "3x",          title: "Croissance moyenne",          items: [
            "Accélération workflow",            "Expansion rapide"],
        },
        {
          id: "m3",          value: "100+",          title: "Intégrations natives",          items: [
            "APIs flexibles",            "Connectivité totale"],
        },
      ]}
      title="Impact global"
      description="Nous aidons les leaders de demain à transformer le chaos en clarté."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="full-width-top-items-bottom-row"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Claire Dupont",          role: "CTO",          company: "Innovate",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=x8z54d"},
        {
          id: "t2",          name: "Marc Levy",          role: "CEO",          company: "TechBase",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cx3d9b"},
        {
          id: "t3",          name: "Sophie Martin",          role: "Product",          company: "ScaleUp",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qvqdfh"},
        {
          id: "t4",          name: "Julien Petit",          role: "Lead Dev",          company: "FutureAI",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g9k7an"},
        {
          id: "t5",          name: "Julie Rousseau",          role: "Founder",          company: "DataZen",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9yldre"},
      ]}
      title="Ce que disent les visionnaires"
      description="L'élégance technologique au service de la performance."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact"
      title="Prêt à commencer ?"
      description="Laissez-nous vos coordonnées pour une consultation privée."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ytshsf"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Produit",              href: "#"},
            {
              label: "Solutions",              href: "#"},
            {
              label: "Entreprise",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "À propos",              href: "#"},
            {
              label: "Carrières",              href: "#"},
            {
              label: "Contact",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Twitter",              href: "#"},
            {
              label: "LinkedIn",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
      ]}
      logoText="Parfait"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}