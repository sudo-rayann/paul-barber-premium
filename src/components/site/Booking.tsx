import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Calendar, User, Scissors, ChevronRight, ArrowLeft } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = ["Haircut", "Skin Fade", "Beard Styling", "Hair Coloring", "Facial", "Kids Haircut", "Hair Wash & Styling"];
const barbers = ["Mr. Siraj", "Fahis", "Jumail", "Rinshad", "Wajid", "Rethin", "Any Available"];
const times = ["10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const steps = ["Service", "Barber", "Date & Time", "Details", "Confirm"];

export function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    setDone(true);
  };

  const canNext =
    (step === 0 && data.service) ||
    (step === 1 && data.barber) ||
    (step === 2 && data.date && data.time) ||
    (step === 3 && data.name && data.phone);

  if (done) {
    return (
      <section id="booking" className="relative py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full gradient-gold text-background"
          >
            <Check className="h-10 w-10" />
          </motion.div>
          <h2 className="font-display text-4xl">Appointment Confirmed</h2>
          <p className="mt-4 text-muted-foreground">
            Thank you {data.name}. We've received your booking request.
          </p>
          <div className="mt-8 rounded-2xl glass p-6 text-left">
            <Row k="Service" v={data.service} />
            <Row k="Barber" v={data.barber} />
            <Row k="Date" v={data.date} />
            <Row k="Time" v={data.time} />
            <Row k="Contact" v={data.phone} />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We'll send a WhatsApp confirmation shortly. For changes, call{" "}
            <a href="tel:+971564349983" className="text-gold">+971 56 434 9983</a>.
          </p>
          <button
            onClick={() => { setDone(false); setStep(0); setData({ service:"", barber:"", date:"", time:"", name:"", phone:"", email:"", notes:"" }); }}
            className="mt-8 text-sm text-gold hover:underline"
          >
            Book another appointment
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Online Booking"
          title={<>Reserve your <span className="text-gradient-gold italic">chair</span></>}
          description="A simple 5-step booking experience. Confirm in under a minute."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          {/* Progress */}
          <div className="mb-10 flex items-center justify-between gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-semibold transition-all ${
                  i <= step ? "gradient-gold text-background" : "border border-border bg-card text-muted-foreground"
                }`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className={`mx-2 h-px flex-1 ${i < step ? "bg-gold" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-border bg-card/60 p-8 md:p-10"
          >
            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-gold">Step {step + 1} of 5</div>
            <h3 className="mb-8 font-display text-3xl">{
              step === 0 ? "Choose your service" :
              step === 1 ? "Choose your barber" :
              step === 2 ? "Pick a date & time" :
              step === 3 ? "Your details" :
              "Confirm appointment"
            }</h3>

            {step === 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Pill key={s} active={data.service === s} onClick={() => setData({ ...data, service: s })} icon={<Scissors className="h-4 w-4" />}>{s}</Pill>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {barbers.map((b) => (
                  <Pill key={b} active={data.barber === b} onClick={() => setData({ ...data, barber: b })} icon={<User className="h-4 w-4" />}>{b}</Pill>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <label className="block">
                  <span className="mb-2 block text-sm text-muted-foreground">Date</span>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={data.date}
                    onChange={(e) => setData({ ...data, date: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                  />
                </label>
                <div>
                  <span className="mb-2 block text-sm text-muted-foreground">Available Time</span>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, time: t })}
                        className={`rounded-xl border px-3 py-3 text-sm transition-all ${
                          data.time === t ? "border-gold gradient-gold text-background" : "border-border bg-background hover:border-gold"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4">
                <Input label="Full Name" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                <Input label="Phone Number" type="tel" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
                <Input label="Email (optional)" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
                <label className="block">
                  <span className="mb-2 block text-sm text-muted-foreground">Notes (optional)</span>
                  <textarea
                    rows={3}
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                  />
                </label>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="rounded-2xl border border-gold bg-background/50 p-6">
                  <Row k="Service" v={data.service} />
                  <Row k="Barber" v={data.barber} />
                  <Row k="Date" v={data.date} />
                  <Row k="Time" v={data.time} />
                  <Row k="Name" v={data.name} />
                  <Row k="Phone" v={data.phone} />
                </div>
                <p className="text-sm text-muted-foreground">
                  By confirming, you agree to receive booking notifications via WhatsApp/SMS.
                </p>
              </div>
            )}

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-gold disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step < 4 ? (
                <button
                  onClick={next}
                  disabled={!canNext}
                  className="inline-flex items-center gap-1 rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-background shadow-gold transition-transform hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={submit}
                  className="inline-flex items-center gap-1 rounded-full gradient-gold px-7 py-3 text-sm font-semibold text-background shadow-gold transition-transform hover:scale-105"
                >
                  <Calendar className="h-4 w-4" /> Confirm Booking
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({ active, onClick, icon, children }: { active: boolean; onClick: () => void; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${
        active ? "border-gold gradient-gold text-background" : "border-border bg-background hover:border-gold"
      }`}
    >
      <span className="flex items-center gap-3 text-sm font-medium">{icon} {children}</span>
      {active && <Check className="h-4 w-4" />}
    </button>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
      />
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border py-3 text-sm last:border-0">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v || "—"}</span>
    </div>
  );
}
