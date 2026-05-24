import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import LegalPage from "../components/LegalPage";
import { readLangCookie, type Lang } from "../lib/lang-cookie";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy — Ruma" },
  { name: "description", content: "How AJILE STUDIO collects, uses, and protects personal data on Ruma in accordance with the Malaysian PDPA." },
  { name: "robots", content: "index, follow" },
];

export const loader = ({ request }: LoaderFunctionArgs) => {
  return { initialLang: readLangCookie(request) };
};

const EnglishContent = () => (
  <>
    <p>
      AJILE STUDIO (Company Registration No. 202503327530) (<strong>"AJILE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>) operates Ruma (ruma.casa) (the <strong>"Service"</strong>). This Privacy Policy explains how we collect, use, store, and protect your personal data in accordance with the Personal Data Protection Act 2010 (<strong>"PDPA"</strong>) of Malaysia.
    </p>
    <p>By using the Service, you consent to the practices described below.</p>

    <h2>1. Personal data we collect</h2>
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr><th>Category</th><th>Examples</th><th>When collected</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Identity &amp; contact data</td>
            <td>Name, email address</td>
            <td>When you join the waitlist or contact us</td>
          </tr>
          <tr>
            <td>Calculator inputs</td>
            <td>Property price, loan amount, income, rental assumptions</td>
            <td>When you use the calculators (processed in your browser; not stored on our servers unless you explicitly save a scenario)</td>
          </tr>
          <tr>
            <td>Usage &amp; device data</td>
            <td>IP address, browser type, device, pages viewed, clicks, referrer</td>
            <td>Automatically via PostHog analytics</td>
          </tr>
          <tr>
            <td>Session recordings</td>
            <td>Recordings of your interactions with the Service (mouse movement, clicks, page navigation). Input fields are masked by default to avoid capturing what you type.</td>
            <td>Automatically via PostHog session replay</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>2. How we use your data</h2>
    <ul>
      <li>To operate, maintain, and improve the Service;</li>
      <li>To respond to enquiries and send waitlist or launch updates you have signed up for;</li>
      <li>To analyse usage patterns and diagnose technical issues;</li>
      <li>To comply with legal obligations in Malaysia.</li>
    </ul>

    <h2>3. Disclosure to third parties</h2>
    <p>We do <strong>not</strong> sell your personal data. We disclose data only to:</p>
    <ul>
      <li><strong>Service providers</strong> that help us run the Service (e.g. PostHog for analytics and session replay, our email and hosting providers), bound by confidentiality and data-protection obligations;</li>
      <li><strong>Law enforcement or regulators</strong> where required by Malaysian law.</li>
    </ul>
    <p>
      <strong>Future opt-in marketing partners.</strong> We may, in the future, offer you the option to share your name and email with selected real estate agencies and property developers for direct marketing and property sales. This will <strong>only occur if you provide separate, explicit, opt-in consent</strong> at the time the option is offered. You can withdraw consent at any time.
    </p>

    <h2>4. Cross-border transfer</h2>
    <p>
      Some of our service providers (including PostHog) process data on servers located outside Malaysia. We rely on the recipient's contractual undertakings and recognised safeguards to ensure a level of protection comparable to the PDPA, as permitted under Section 129 of the PDPA.
    </p>

    <h2>5. Retention</h2>
    <p>
      We retain personal data only for as long as necessary to fulfil the purposes set out above, or as required by Malaysian law. Waitlist data is retained until you unsubscribe or request deletion. Analytics and session-replay data are retained for up to <strong>12 months</strong> from collection, after which they are deleted or anonymised.
    </p>

    <h2>6. Security</h2>
    <p>
      We apply reasonable technical and organisational measures (encryption in transit, access controls, vendor due diligence) to protect personal data from unauthorised access, loss, or disclosure.
    </p>

    <h2>7. Your rights under the PDPA</h2>
    <p>You have the right to:</p>
    <ul>
      <li>access and obtain a copy of your personal data;</li>
      <li>correct inaccurate or incomplete data;</li>
      <li>withdraw consent to processing (which may affect our ability to provide the Service);</li>
      <li>request deletion of your data, subject to legal retention requirements;</li>
      <li>limit our processing of your data for direct marketing.</li>
    </ul>
    <p>To exercise any of these rights, email <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>.</p>

    <h2>8. Cookies &amp; tracking</h2>
    <p>
      The Service uses cookies and similar technologies (via PostHog) for analytics and to remember your preferences. You can disable cookies through your browser settings; some features may not work correctly as a result.
    </p>

    <h2>9. Children</h2>
    <p>
      The Service is not directed at persons under 18. We do not knowingly collect personal data from children.
    </p>

    <h2>10. Changes</h2>
    <p>
      We may update this Policy from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be highlighted on the Service.
    </p>

    <h2>11. Contact</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      Email: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      See also: <Link to="/terms">Terms of Service</Link> · <Link to="/disclaimer">Disclaimer</Link>
    </p>
  </>
);

const BahasaContent = () => (
  <>
    <p style={{ fontStyle: "italic", fontSize: "0.88rem", color: "var(--ink-3)", marginBottom: "2rem" }}>
      Nota: Versi Bahasa Inggeris dokumen ini adalah versi rasmi yang mengawal. Terjemahan Bahasa Malaysia ini disediakan untuk kemudahan rujukan; sekiranya terdapat sebarang percanggahan, versi Bahasa Inggeris akan terpakai.
    </p>

    <p>
      AJILE STUDIO (No. Pendaftaran Syarikat 202503327530) (<strong>"AJILE"</strong>, <strong>"kami"</strong>) mengendalikan Ruma (ruma.casa) (<strong>"Perkhidmatan"</strong>). Dasar Privasi ini menerangkan cara kami mengumpul, menggunakan, menyimpan, dan melindungi data peribadi anda mengikut Akta Perlindungan Data Peribadi 2010 (<strong>"APDP"</strong>) Malaysia.
    </p>
    <p>Dengan menggunakan Perkhidmatan ini, anda bersetuju dengan amalan yang dinyatakan di bawah.</p>

    <h2>1. Data peribadi yang kami kumpul</h2>
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr><th>Kategori</th><th>Contoh</th><th>Bila dikumpul</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Data identiti dan hubungan</td>
            <td>Nama, alamat e-mel</td>
            <td>Apabila anda menyertai senarai tunggu atau menghubungi kami</td>
          </tr>
          <tr>
            <td>Input kalkulator</td>
            <td>Harga hartanah, jumlah pinjaman, pendapatan, andaian sewaan</td>
            <td>Apabila anda menggunakan kalkulator (diproses dalam pelayar anda; tidak disimpan pada pelayan kami melainkan anda menyimpan senario secara nyata)</td>
          </tr>
          <tr>
            <td>Data penggunaan dan peranti</td>
            <td>Alamat IP, jenis pelayar, peranti, halaman yang dilihat, klik, perujuk</td>
            <td>Secara automatik melalui analitik PostHog</td>
          </tr>
          <tr>
            <td>Rakaman sesi</td>
            <td>Rakaman interaksi anda dengan Perkhidmatan (pergerakan tetikus, klik, navigasi halaman). Medan input ditutup secara lalai bagi mengelakkan apa yang anda taipkan daripada dirakam.</td>
            <td>Secara automatik melalui ciri rakaman sesi PostHog</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>2. Cara kami menggunakan data anda</h2>
    <ul>
      <li>Untuk mengendalikan, menyelenggara, dan menambah baik Perkhidmatan;</li>
      <li>Untuk membalas pertanyaan dan menghantar kemas kini senarai tunggu atau pelancaran yang anda telah daftarkan;</li>
      <li>Untuk menganalisis corak penggunaan dan mendiagnosis isu teknikal;</li>
      <li>Untuk mematuhi kewajipan undang-undang di Malaysia.</li>
    </ul>

    <h2>3. Pendedahan kepada pihak ketiga</h2>
    <p>Kami <strong>tidak</strong> menjual data peribadi anda. Kami mendedahkan data hanya kepada:</p>
    <ul>
      <li><strong>Pembekal perkhidmatan</strong> yang membantu kami mengendalikan Perkhidmatan (cth. PostHog untuk analitik dan rakaman sesi, pembekal e-mel dan pengehosan kami), yang terikat dengan kewajipan kerahsiaan dan perlindungan data;</li>
      <li><strong>Pihak penguatkuasaan undang-undang atau pengawal selia</strong> apabila dikehendaki oleh undang-undang Malaysia.</li>
    </ul>
    <p>
      <strong>Rakan kongsi pemasaran ikut-serta pada masa hadapan.</strong> Kami mungkin, pada masa hadapan, menawarkan anda pilihan untuk berkongsi nama dan alamat e-mel anda dengan agensi hartanah dan pemaju hartanah yang terpilih bagi tujuan pemasaran langsung dan jualan hartanah. Perkongsian ini <strong>hanya akan berlaku sekiranya anda memberikan persetujuan ikut-serta yang berasingan dan jelas</strong> pada masa pilihan tersebut ditawarkan. Anda boleh menarik balik persetujuan pada bila-bila masa.
    </p>

    <h2>4. Pemindahan rentas sempadan</h2>
    <p>
      Sebahagian daripada pembekal perkhidmatan kami (termasuk PostHog) memproses data pada pelayan yang terletak di luar Malaysia. Kami bergantung kepada aku janji kontrak penerima dan perlindungan yang diiktiraf bagi memastikan tahap perlindungan yang setanding dengan APDP, seperti yang dibenarkan di bawah Seksyen 129 APDP.
    </p>

    <h2>5. Pengekalan</h2>
    <p>
      Kami mengekalkan data peribadi hanya selama yang diperlukan untuk memenuhi tujuan yang dinyatakan di atas, atau seperti yang dikehendaki oleh undang-undang Malaysia. Data senarai tunggu disimpan sehingga anda berhenti melanggan atau meminta pemadaman. Data analitik dan rakaman sesi disimpan sehingga <strong>12 bulan</strong> dari tarikh pengumpulan, selepas itu data tersebut akan dipadamkan atau dianonimkan.
    </p>

    <h2>6. Keselamatan</h2>
    <p>
      Kami menggunakan langkah teknikal dan organisasi yang munasabah (penyulitan semasa transit, kawalan akses, usaha wajar vendor) bagi melindungi data peribadi daripada akses, kehilangan, atau pendedahan tanpa kebenaran.
    </p>

    <h2>7. Hak anda di bawah APDP</h2>
    <p>Anda mempunyai hak untuk:</p>
    <ul>
      <li>mengakses dan mendapatkan salinan data peribadi anda;</li>
      <li>membetulkan data yang tidak tepat atau tidak lengkap;</li>
      <li>menarik balik persetujuan terhadap pemprosesan (yang mungkin menjejaskan keupayaan kami untuk menyediakan Perkhidmatan);</li>
      <li>memohon pemadaman data anda, tertakluk kepada keperluan pengekalan undang-undang;</li>
      <li>menghadkan pemprosesan data anda untuk pemasaran langsung.</li>
    </ul>
    <p>Untuk melaksanakan mana-mana hak ini, sila e-melkan <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>.</p>

    <h2>8. Kuki dan penjejakan</h2>
    <p>
      Perkhidmatan ini menggunakan kuki dan teknologi serupa (melalui PostHog) untuk analitik dan mengingati pilihan anda. Anda boleh melumpuhkan kuki melalui tetapan pelayar anda; sesetengah ciri mungkin tidak berfungsi dengan betul akibat tindakan tersebut.
    </p>

    <h2>9. Kanak-kanak</h2>
    <p>
      Perkhidmatan ini tidak ditujukan kepada individu di bawah umur 18 tahun. Kami tidak mengumpul data peribadi daripada kanak-kanak dengan sengaja.
    </p>

    <h2>10. Perubahan</h2>
    <p>
      Kami mungkin mengemas kini Dasar ini dari semasa ke semasa. Tarikh "Kemas kini terakhir" di atas mencerminkan semakan terkini. Perubahan material akan diketengahkan pada Perkhidmatan.
    </p>

    <h2>11. Hubungi</h2>
    <p>
      AJILE STUDIO (202503327530)<br />
      E-mel: <a href="mailto:inbox@ajile.team">inbox@ajile.team</a>
    </p>

    <p style={{ marginTop: "2rem" }}>
      Lihat juga: <Link to="/terms">Terma Perkhidmatan</Link> · <Link to="/disclaimer">Penafian</Link>
    </p>
  </>
);

export default function Privacy() {
  const { initialLang } = useLoaderData() as { initialLang: Lang };
  return (
    <LegalPage
      initialLang={initialLang}
      title={{ en: "Privacy Policy", bm: "Dasar Privasi" }}
      lastUpdated="24 May 2026"
      content={{ en: <EnglishContent />, bm: <BahasaContent /> }}
    />
  );
}
