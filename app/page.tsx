"use client";

import {
  ArrowRight,
  AudioWaveform,
  BadgeCheck,
  ChevronRight,
  FileCheck2,
  FileCode2,
  Files,
  LaptopMinimal,
  Mic,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Formatos", href: "#formatos" },
  { label: "Precios", href: "#waitlist" },
  { label: "FAQ", href: "#faq" },
];

const crisisMetrics = [
  {
    value: "+1.42 h/día",
    label: "Extra fuera del horario laboral dedicadas a notas médicas.",
    source: "AMA, 2024",
  },
  {
    value: "22.5%",
    label: "De los médicos pasa más de 8 horas semanales en documentación fuera de horario.",
    source: "AMA, 2024",
  },
  {
    value: "34%-55%",
    label: "De la jornada puede consumirse en tareas administrativas en práctica privada en México.",
    source: "Luna Salud MX, 2024",
  },
];

const features = [
  {
    icon: AudioWaveform,
    title: "Diarización paciente → médico",
    description:
      "Distingue voces y traduce lenguaje coloquial como “me hinchan los dedos” a terminología médica formal como “tumefacción IFP”.",
  },
  {
    icon: Files,
    title: "6 formatos de nota",
    description:
      "Control, SOAP, Historia clínica, Ecografía MSK, Interconsulta y Libre. Cambias de formato con un click.",
  },
  {
    icon: FileCode2,
    title: "CIE-10 con autocompletado",
    description:
      "Base curada para múltiples especialidades clínicas. Escribes “lup” y te sugiere M32.9 sin romper tu flujo.",
  },
  {
    icon: LaptopMinimal,
    title: "Puente móvil ↔ escritorio",
    description:
      "Dictas en el celular dentro de la consulta y pasas la nota a tu PC por QR o link para revisar y firmar.",
  },
];

const steps = [
  {
    icon: Mic,
    title: "Dicta",
    description:
      "Con consentimiento informado, el móvil captura la conversación natural y transcribe en español médico.",
  },
  {
    icon: Workflow,
    title: "Diariza + traduce",
    description:
      "STT, diarización y LLM clínico separan voces, extraen síntomas, signos vitales, medicamentos y plan.",
  },
  {
    icon: FileCheck2,
    title: "Firma",
    description:
      "Revisas, editas libremente, validas campos NOM-004 y firmas con sello de tiempo antes de registrar.",
  },
];

const formatPreviews = {
  control: {
    label: "Control",
    badge: "Confianza alta",
    lines: [
      ["S", "verde", "Paciente refiere artralgias en manos y rigidez matutina de 70 minutos."],
      ["O", "verde", "Tumefacción en IFP 2-4 bilaterales. EVA dolor 6/10. DAS28: 4.2."],
      ["A", "ambar", "Actividad moderada de artritis inflamatoria en seguimiento."],
      ["P", "verde", "Ajustar DMARD, solicitar VSG/PCR y control en 4 semanas."],
    ],
  },
  soap: {
    label: "SOAP",
    badge: "Confianza media",
    lines: [
      ["Subjetivo", "verde", "Dolor poliarticular, rigidez matutina y fatiga progresiva."],
      ["Objetivo", "ambar", "Sensibilidad MCP e IFP, FR previo positivo, PCR pendiente."],
      ["Análisis", "ambar", "Brotes inflamatorios compatibles con AR seropositiva."],
      ["Plan", "verde", "Reforzar adherencia, completar laboratorio y ajustar tratamiento."],
    ],
  },
  hc: {
    label: "Historia clínica",
    badge: "Confianza alta",
    lines: [
      ["Motivo", "verde", "Consulta por dolor articular crónico y rigidez matutina prolongada."],
      ["Antecedentes", "verde", "Hipotiroidismo tratado. Sin alergias medicamentosas conocidas."],
      ["Examen", "ambar", "Sinovitis en muñecas, tumefacción IFP, sin fiebre reportada."],
      ["Impresión", "verde", "Síndrome inflamatorio articular en estudio, probable AR."],
    ],
  },
  eco: {
    label: "Ecografía MSK",
    badge: "Confianza baja",
    lines: [
      ["Región", "verde", "Muñeca derecha y MCP 2-3."],
      ["Hallazgos", "ambar", "Hipertrofia sinovial grado 2 con señal Doppler focal."],
      ["Mediciones", "rojo", "Falta registrar grosor sinovial en receso dorsal."],
      ["Conclusión", "ambar", "Sinovitis activa compatible con proceso inflamatorio."],
    ],
  },
  interconsulta: {
    label: "Interconsulta",
    badge: "Confianza alta",
    lines: [
      ["Solicitud", "verde", "Valoración por especialidad correspondiente para artralgias inflamatorias."],
      ["Resumen", "verde", "Paciente con ANA positivo, dolor articular y VSG elevada."],
      ["Pregunta clínica", "ambar", "Definir conducta diagnóstica y escalamiento terapéutico."],
      ["Adjuntos", "verde", "Laboratorios, imágenes y control previo."],
    ],
  },
} as const;

const clinicalControlReasons = [
  {
    title: "La IA sugiere; el médico decide",
    description:
      "Ninguna nota se registra sin revisión exhaustiva y firma explícita del médico. El control clínico queda siempre en tus manos.",
  },
  {
    title: "Cumplimiento desde el origen",
    description:
      "Diseñado para trabajar con campos NOM-004, trazabilidad, consentimiento informado y datos clínicos cifrados.",
  },
  {
    title: "Métricas de piloto medibles",
    description:
      "El MVP se valida con metas claras: WER ≤15%, recall ≥85%, F1 ≥82% y completitud NOM-004 ≥90%.",
  },
  {
    title: "Comprensión, no solo dictado",
    description:
      "Pasa de conversación natural a borrador SOAP: captura, diarización, contexto clínico y edición libre antes de firmar.",
  },
];

const pricingPlans = [
  {
    name: "Plan Básico",
    price: "$23 MXN al día",
    monthly: "$700 MXN/mes",
    credits: "150 créditos",
    note: "Menos que tu café de la mañana.",
  },
  {
    name: "Plan Estándar",
    price: "$33 MXN al día",
    monthly: "$1,000 MXN/mes",
    credits: "250 créditos",
    note: "Para consultorios con mayor ritmo.",
  },
  {
    name: "Plan Intensivo",
    price: "$47 MXN al día",
    monthly: "$1,400 MXN/mes",
    credits: "400 créditos",
    note: "Menos que una comida de trabajo.",
  },
];

const faqItems = [
  {
    question: "¿Mis datos pasan por servidores externos?",
    answer:
      "Los datos estarán encriptados en nuestros servidores, protegidos en tránsito y en reposo, con controles alineados a LF PDPPP para resguardar la información clínica.",
  },
  {
    question: "¿Necesito configurar una API de IA?",
    answer:
      "No necesitas diseñar el flujo técnico desde cero. DrNoteAI integra captura, transcripción, diarización y LLM clínico para que el piloto se configure de forma guiada.",
  },
  {
    question: "¿Funciona offline?",
    answer:
      "El modo texto siempre está disponible. El modo audio con STT, diarización y LLM clínico requiere conexión para procesar la consulta.",
  },
  {
    question: "¿Puedo editar la nota antes de firmar?",
    answer:
      "Sí. La nota siempre queda editable y cada sección muestra una señal visual de completitud para que ajustes solo donde hace falta.",
  },
  {
    question: "¿Soporta múltiples especialidades?",
    answer:
      "Sí. DrNoteAI está pensado para múltiples especialidades clínicas y puede adaptarse a distintos flujos de consulta. Puedes usarlo en medicina general, interna, pediatría, ginecología, traumatología y otras áreas según tu formato de nota.",
  },
  {
    question: "¿Cumple con normativa de historia clínica?",
    answer:
      "Está diseñada para alinearse con NOM-004, NOM-024 y LF PDPPP desde el origen, manteniendo campos estructurados, revisión médica y firma explícita antes de registrar la nota.",
  },
];

const sectionClass =
  "mx-auto flex min-h-[100svh] w-full max-w-[1280px] flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24";
const cardClass =
  "rounded-[18px] border border-[rgba(160,178,204,0.16)] bg-[linear-gradient(180deg,rgba(18,28,46,0.96)_0%,rgba(8,13,24,0.98)_100%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-5";

function statusTone(tone: "verde" | "ambar" | "rojo") {
  if (tone === "verde") return "bg-[#2ad8a0]";
  if (tone === "ambar") return "bg-[#f2a73a]";
  return "bg-[#ff6060]";
}
function ClinicalSignalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1120 210" fill="none" className={className} aria-hidden="true">
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M8 108C31 32 52 168 78 66C103 -38 126 232 153 66C177 -82 206 218 232 96C250 7 274 150 302 104C335 52 362 138 394 98C424 60 455 116 486 104C524 90 556 101 590 98"
          stroke="#cfe2f3"
          strokeWidth="1.35"
          opacity="0.36"
        />
        <path
          d="M3 86C42 124 52 24 90 142C127 254 154 0 196 132C232 240 250 52 300 104C341 60 378 126 421 104C462 82 506 107 548 100"
          stroke="#a8b5c9"
          strokeWidth="1.1"
          opacity="0.3"
        />
        <path
          d="M18 132C61 88 98 111 128 108C175 100 206 93 244 101C286 108 324 99 365 101C426 104 472 104 534 102H632"
          stroke="#7debd1"
          strokeWidth="1.8"
          opacity="0.62"
        />
        <path d="M628 102H736" stroke="#7debd1" strokeWidth="1.8" opacity="0.55" />
        <g transform="translate(736 42)" stroke="#7debd1" opacity="0.68">
          <path d="M0 0H116L156 40V154H0Z" strokeWidth="1.6" />
          <path d="M116 0V40H156" strokeWidth="1.6" />
          <path d="M32 0V154M64 0V154M96 0V154" strokeWidth="0.95" opacity="0.72" />
          <path d="M0 52H156M0 104H156" strokeWidth="0.95" opacity="0.72" />
        </g>
        <path
          d="M892 104H1096"
          stroke="#7debd1"
          strokeDasharray="10 14"
          strokeWidth="1.25"
          opacity="0.18"
        />
        <path
          d="M888 56C944 20 1004 26 1066 44M902 154C958 186 1014 174 1104 142"
          stroke="#a8b5c9"
          strokeWidth="0.9"
          opacity="0.12"
        />
      </g>
    </svg>
  );
}
export default function Page() {
  return (
    <main className="relative overflow-x-clip text-[#f6fbff]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(125,235,209,0.16),transparent_55%)]" />
      <header className="sticky top-0 z-50 border-b border-[rgba(160,178,204,0.12)] bg-[rgba(8,13,24,0.78)] surface-blur shadow-[0_1px_0_rgba(255,255,255,0.04),0_18px_32px_rgba(0,0,0,0.28)]">
        <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-[15px] font-semibold tracking-[-0.04em] text-[#f6fbff]">
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="pulse-dot absolute inline-flex h-3 w-3 rounded-full bg-[#7debd1] shadow-[0_0_0_6px_rgba(125,235,209,0.12),0_0_24px_rgba(125,235,209,0.38)]" />
            </span>
            <span>DrNoteAI</span>
          </a>
          <nav className="hidden items-center gap-2 text-sm text-[#a8b5c9] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-[14px] border border-transparent px-4 py-2 transition-all duration-200 hover:border-[rgba(160,178,204,0.14)] hover:bg-[rgba(23,35,58,0.72)] hover:text-[#f6fbff]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex">
            <a href="#waitlist">Solicitar piloto</a>
          </Button>
        </div>
      </header>

      <section id="top" className={sectionClass}>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(160,178,204,0.16)] bg-[rgba(15,23,38,0.8)] px-4 py-2 text-sm text-[#a8b5c9] shadow-[0_16px_28px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <Sparkles className="h-4 w-4 text-[#7debd1]" />
              IA médica · Español médico · NLP clínico
            </div>
            <div className="relative space-y-5">
              <ClinicalSignalMark className="pointer-events-none absolute -left-10 -right-10 -top-16 h-36 w-[calc(100%+5rem)] opacity-45 sm:-left-20 sm:-right-20 sm:-top-20 sm:h-44 sm:w-[calc(100%+10rem)] sm:opacity-65 lg:-left-32 lg:-right-32 lg:h-52 lg:w-[calc(100%+16rem)]" />
              <h1 className="relative max-w-[900px] text-balance text-[3.15rem] font-light leading-[0.9] tracking-[-0.07em] text-[#f6fbff] sm:text-[4.35rem] lg:text-[5.8rem]">
                DrNoteAI.
                <br />
                <span className="text-[0.74em] leading-[0.95]">
                  El Copiloto Inteligente de la Consulta Médica.
                </span>
              </h1>
              <div className="relative space-y-4">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-[#7debd1]">
                  Menos administración, más medicina.
                </p>
                <p className="max-w-[720px] text-[1.02rem] leading-8 text-[#c0cad9] sm:text-[1.12rem]">
                  DrNoteAI transforma la conversación natural de la consulta en inteligencia documental: captura,
                  diariza, comprende el lenguaje clínico y genera un borrador SOAP para revisar, editar y firmar.
                  La IA sugiere; el médico decide.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#waitlist">Solicitar acceso piloto</a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full gap-2 sm:w-auto">
                <a href="#waitlist">
                  Ver demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className={cardClass}>
                <div className="mb-1 text-2xl font-light tracking-[-0.05em]">SOAP</div>
                <div className="text-sm leading-7 text-[#a8b5c9]">Notas estructuradas para consulta ambulatoria.</div>
              </div>
              <div className={cardClass}>
                <div className="mb-1 text-2xl font-light tracking-[-0.05em]">CIE-10</div>
                <div className="text-sm leading-7 text-[#a8b5c9]">Autocompletado clínico curado para múltiples especialidades.</div>
              </div>
              <div className={cardClass}>
                <div className="mb-1 text-2xl font-light tracking-[-0.05em]">Móvil → PC</div>
                <div className="text-sm leading-7 text-[#a8b5c9]">Empiezas en el celular y terminas en escritorio sin copiar.</div>
              </div>
            </div>
          </div>

          <div className="float-card relative">
            <div className="absolute -inset-4 rounded-[24px] bg-[radial-gradient(circle,rgba(125,235,209,0.14),transparent_64%)] blur-2xl" />
            <Card className="relative overflow-hidden p-0 shadow-[0_32px_70px_rgba(0,0,0,0.4)]">
              <div className="border-b border-[rgba(160,178,204,0.12)] px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#74829a]">Vista previa</p>
                    <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.04em] text-[#f6fbff]">Traducción clínica en vivo</h2>
                  </div>
                  <div className="rounded-full border border-[#1d7460] bg-[#102c28] px-4 py-2 font-mono text-sm text-[#bbfff0]">
                    LLM clínico
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-4 sm:p-5">
                <div className="rounded-[16px] border border-[rgba(160,178,204,0.14)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] p-5">
                  <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-[#74829a]">
                    <Mic className="h-4 w-4 text-[#7debd1]" />
                    Transcripción original
                  </div>
                  <p className="text-[1.05rem] leading-9 text-[#dbe5f2]">
                    doctora me duelen las coyunturas y en la mañana tengo las manos tiesas
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 text-[#2ad8a0]">
                  <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#2ad8a0,transparent)]" />
                  <ChevronRight className="flow-arrow h-5 w-5" />
                  <div className="h-px flex-1 bg-[linear-gradient(90deg,transparent,#2ad8a0,transparent)]" />
                </div>
                <div className="rounded-[16px] border border-[#1d7460] bg-[linear-gradient(180deg,rgba(16,44,40,0.52)_0%,rgba(8,13,24,0.94)_100%)] p-5">
                  <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-[#7debd1]">
                    <Stethoscope className="h-4 w-4 text-[#7debd1]" />
                    Terminología médica formal
                  </div>
                  <p className="text-[1.05rem] leading-9 text-[#f6fbff]">Paciente refiere artralgias y rigidez matutina prolongada.</p>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-[16px] border border-[rgba(160,178,204,0.14)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#74829a]">CIE-10</span>
                      <span className="rounded-full border border-[#1d7460] bg-[#102c28] px-3 py-1 font-mono text-xs text-[#7debd1]">
                        lup → M32.9
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-[#a8b5c9]">Autocompletado clínico según contexto de consulta.</p>
                  </div>
                  <div className="rounded-[16px] border border-[rgba(160,178,204,0.14)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#74829a]">Semáforo</span>
                      <span className="flex items-center gap-2 text-[11px] text-[#dbe5f2]">
                        <span className="h-2 w-2 rounded-full bg-[#2ad8a0]" />
                        Sección lista
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-[#a8b5c9]">Validación rápida antes de imprimir o firmar.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Dolor real de consulta</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              La crisis silenciosa de la documentación clínica.
            </h2>
            <p className="mx-auto max-w-[860px] text-base leading-8 text-[#c0cad9] sm:text-lg">
              La carga administrativa no solo retrasa la salida. También empuja horas extra, desgaste y riesgo de
              notas incompletas.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {crisisMetrics.map((item) => (
              <Card key={item.value} className="flex min-h-[220px] flex-col justify-between">
                <CardHeader className="space-y-4">
                  <div className="text-[3rem] font-light tracking-[-0.08em] text-[#f6fbff]">{item.value}</div>
                  <CardDescription className="max-w-[20rem] text-base leading-7">{item.label}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#74829a]">{item.source}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["-42%", "errores de omisión proyectados"],
              ["~250", "eventos adversos evitados al año por médico"],
              ["+2.4", "consultas adicionales posibles por día"],
              ["95%", "notas cerradas antes de que el paciente salga"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-[16px] border border-[rgba(160,178,204,0.16)] bg-[rgba(8,13,24,0.72)] p-4"
              >
                <div className="text-3xl font-light tracking-[-0.06em] text-[#f6fbff]">{value}</div>
                <p className="mt-2 text-sm leading-6 text-[#a8b5c9]">{label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[18px] border border-[rgba(160,178,204,0.16)] bg-[linear-gradient(180deg,rgba(18,28,46,0.96)_0%,rgba(8,13,24,0.98)_100%)] px-5 py-4 text-center shadow-[0_24px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <p className="text-sm leading-7 text-[#c0cad9]">
              Riesgos asociados: errores clínicos por omisión documental, burnout profesional progresivo y riesgo legal
              por incumplimiento NOM-004.
            </p>
          </div>
        </div>
      </section>

      <section id="producto" className={sectionClass}>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Producto</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              Una capa clínica entre la voz y la nota final
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="h-full">
                  <CardContent className="flex h-full flex-col gap-5 p-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#1f6e55] bg-[rgba(42,216,160,0.08)]">
                      <Icon className="h-5 w-5 text-[#2ad8a0]" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl tracking-[-0.03em]">{feature.title}</CardTitle>
                      <CardDescription className="text-[15px] leading-7">{feature.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className={sectionClass}>
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Cómo funciona</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              Tres pasos. Ninguno te saca de la consulta.
            </h2>
          </div>
          <div className="relative grid gap-4 lg:grid-cols-3 lg:gap-6">
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-12 hidden lg:block">
              <div className="h-px bg-[linear-gradient(90deg,rgba(42,216,160,0.05),rgba(42,216,160,0.45),rgba(42,216,160,0.05))]" />
            </div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={step.title} className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6e6e6e]">
                    0{index + 1}
                  </div>
                  <CardContent className="flex h-full flex-col gap-5 p-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#262626] bg-[#141414]">
                      <Icon className="h-5 w-5 text-[#2ad8a0]" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl tracking-[-0.04em]">{step.title}</CardTitle>
                      <CardDescription className="text-[15px] leading-7">{step.description}</CardDescription>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="grid gap-3 rounded-[18px] border border-[rgba(160,178,204,0.16)] bg-[rgba(8,13,24,0.72)] p-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Piloto MVP: 5 semanas", "5 consultorios", "WER ≤15%", "NOM-004 ≥90%"].map((metric) => (
              <div key={metric} className="font-mono text-sm text-[#c0cad9]">
                <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-[#2ad8a0]" />
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formatos" className={sectionClass}>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Formatos</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              La misma consulta, adaptada al formato que necesitas
            </h2>
          </div>
          <Tabs defaultValue="control" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              <TabsTrigger value="control">Control</TabsTrigger>
              <TabsTrigger value="soap">SOAP</TabsTrigger>
              <TabsTrigger value="hc">HC</TabsTrigger>
              <TabsTrigger value="eco">Ecografía</TabsTrigger>
              <TabsTrigger value="interconsulta">Interconsulta</TabsTrigger>
            </TabsList>
            {(
              Object.entries(formatPreviews) as Array<
                [keyof typeof formatPreviews, (typeof formatPreviews)[keyof typeof formatPreviews]]
              >
            ).map(([value, preview]) => (
              <TabsContent key={value} value={value}>
                <Card className="overflow-hidden p-0">
                  <div className="flex flex-col gap-4 border-b border-[#262626] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#6e6e6e]">{preview.label}</div>
                      <h3 className="mt-1 text-xl font-medium tracking-[-0.03em]">Preview estructurado</h3>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#1f6e55] bg-[rgba(42,216,160,0.08)] px-3 py-1 text-xs text-[#7af0c4]">
                      <BadgeCheck className="h-3.5 w-3.5 text-[#2ad8a0]" />
                      {preview.badge}
                    </div>
                  </div>
                  <div className="space-y-3 p-4 font-mono text-[13px] leading-7 text-[#d0d0d0] sm:p-5">
                    {preview.lines.map(([section, tone, content]) => (
                      <div
                        key={section}
                        className="grid gap-3 rounded-[14px] border border-[#262626] bg-[#141414] p-4 md:grid-cols-[170px_1fr]"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${statusTone(tone)}`} />
                          <span className="text-[#f2f2f2]">{section}</span>
                        </div>
                        <p className="text-[#a8a8a8]">{content}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Control clínico</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              No es dictado por voz. Es comprensión clínica real.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {clinicalControlReasons.map((reason) => (
              <Card key={reason.title} className="h-full">
                <CardContent className="flex h-full flex-col gap-4 p-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#262626] bg-[#141414]">
                    <ShieldCheck className="h-5 w-5 text-[#2ad8a0]" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl tracking-[-0.03em]">{reason.title}</CardTitle>
                    <CardDescription className="text-[15px] leading-7">{reason.description}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <p className="mt-6 text-lg text-[#a8a8a8]">
          La responsabilidad clínica es y seguirá siendo estrictamente humana.
        </p>
      </section>

      <section className={sectionClass}>
        <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Sincronización móvil ↔ escritorio</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              Captura la voz donde estés. Procesa donde tengas tu teclado.
            </h2>
            <p className="max-w-[34rem] text-base leading-8 text-[#a8a8a8] sm:text-lg">
              Entras a consulta con el celular, capturas la conversación y envías la nota a tu escritorio con un toque
              para revisar, completar CIE-10 y firmar desde la PC.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle,rgba(125,235,209,0.12),transparent_62%)] blur-3xl" />
            <div className="relative grid items-center gap-5 lg:grid-cols-[240px_140px_1fr]">
              <Card className="mx-auto w-full max-w-[240px] p-5">
                <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[rgba(160,178,204,0.16)]" />
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#74829a]">
                    <span>Consulta activa</span>
                    <span className="flex items-center gap-2 text-[#7debd1]">
                      <span className="pulse-dot inline-flex h-2 w-2 rounded-full bg-[#7debd1]" />
                      REC
                    </span>
                  </div>
                  <div className="rounded-[16px] border border-[rgba(160,178,204,0.14)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] p-4 text-base leading-8 text-[#dbe5f2]">
                    Paciente: me despierto con las manos tiesas y me cuesta cerrar el puño.
                  </div>
                  <Button asChild className="w-full">
                    <a href="#waitlist" className="justify-between">
                      <span>→ PC</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>

              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 220 88" className="hidden h-20 w-full max-w-[220px] lg:block" fill="none">
                  <path d="M12 44H198" className="dash-flow" stroke="#2ad8a0" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M167 14L198 44L167 74" stroke="#2ad8a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex items-center gap-3 py-2 text-[#2ad8a0] lg:hidden">
                  <div className="h-px w-12 bg-[linear-gradient(90deg,transparent,#2ad8a0)]" />
                  <ArrowRight className="h-5 w-5" />
                  <div className="h-px w-12 bg-[linear-gradient(90deg,#2ad8a0,transparent)]" />
                </div>
              </div>

              <Card className="p-0">
                <div className="flex items-center justify-between border-b border-[rgba(160,178,204,0.12)] px-4 py-4 sm:px-5">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#74829a]">Escritorio</div>
                    <h3 className="mt-1 text-xl font-medium tracking-[-0.03em]">Nota generada</h3>
                  </div>
                  <div className="rounded-full border border-[rgba(160,178,204,0.16)] px-3 py-1 font-mono text-xs text-[#dbe5f2]">
                    lista para firmar
                  </div>
                </div>
                <div className="space-y-3 p-4 sm:p-5">
                  {[
                    "Motivo de consulta: dolor articular inflamatorio en manos.",
                    "Hallazgos: rigidez matutina prolongada, limitación funcional al cierre de puño.",
                    "Plan: solicitar VSG, PCR, FR y ecografía MSK de manos.",
                  ].map((line, index) => (
                    <div key={line} className="flex items-start gap-3 rounded-[16px] border border-[rgba(160,178,204,0.14)] bg-[linear-gradient(180deg,rgba(11,17,27,0.98)_0%,rgba(7,11,18,0.98)_100%)] p-4">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#2ad8a0]" />
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#74829a]">Sección 0{index + 1}</p>
                        <p className="mt-1 text-sm leading-7 text-[#dbe5f2]">{line}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className={sectionClass}>
        <Card className="mx-auto w-full max-w-[1080px] overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6 p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">Acceso anticipado</p>
              <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
                Para el médico, DrNoteAI no es un gasto. Es una inversión.
              </h2>
              <p className="max-w-[36rem] text-base leading-8 text-[#a8a8a8] sm:text-lg">
                Planes simples para validar el piloto en consulta real. Todos incluyen modo texto limitado y firma
                digital.
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="rounded-[16px] border border-[rgba(160,178,204,0.16)] bg-[rgba(8,13,24,0.72)] p-4"
                  >
                    <p className="text-sm text-[#a8b5c9]">{plan.name}</p>
                    <p className="mt-3 text-2xl font-light tracking-[-0.05em] text-[#f6fbff]">{plan.price}</p>
                    <p className="mt-2 font-mono text-xs text-[#7debd1]">
                      {plan.monthly} · {plan.credits}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#a8b5c9]">{plan.note}</p>
                  </div>
                ))}
              </div>
              <p className="rounded-[16px] border border-[#1f6e55] bg-[rgba(42,216,160,0.08)] px-4 py-3 text-sm leading-7 text-[#c0cad9]">
                Proyección del PDF: 1.4 h recuperadas al día pueden convertirse en 350 h al año de tiempo clínico
                recuperado.
              </p>
            </div>
            <div className="border-t border-[#262626] bg-[#141414] p-5 sm:p-6 lg:border-l lg:border-t-0">
              <form action="mailto:hola@drnoteai.lat" method="post" className="space-y-4">
                <label htmlFor="email" className="block text-sm text-[#a8a8a8]">
                  Déjanos tu correo y te avisamos cuando abra el piloto.
                </label>
                <Input id="email" name="email" type="email" placeholder="tu@correo.com" required />
                <Button type="submit" className="w-full">
                  Solicitar acceso piloto
                </Button>
                <p className="text-sm leading-6 text-[#6e6e6e]">
                  Prioridad para médicos y consultorios que quieran medir tiempo recuperado, completitud NOM-004 y
                  reducción de carga documental.
                </p>
              </form>
            </div>
          </div>
        </Card>
      </section>

      <section id="faq" className={sectionClass}>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-[#6e6e6e]">FAQ</p>
            <h2 className="text-balance text-3xl font-light tracking-[-0.05em] sm:text-5xl">
              Lo importante antes de empezar
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-[#262626]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 py-8 text-sm text-[#a8a8a8] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3 text-[#f2f2f2]">
            <span className="pulse-dot inline-flex h-2.5 w-2.5 rounded-full bg-[#2ad8a0]" />
            <span>DrNoteAI</span>
            <span className="text-[#74829a]">© 2026 DrNoteAI · México y Bolivia.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:hola@drnoteai.lat" className="transition-colors duration-200 hover:text-[#f2f2f2]">
              Contacto
            </a>
            <a href="#waitlist" className="transition-colors duration-200 hover:text-[#f2f2f2]">
              Términos
            </a>
            <a href="#waitlist" className="transition-colors duration-200 hover:text-[#f2f2f2]">
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
