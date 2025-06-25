import React, { useEffect, useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/message-icon.png'
import email_icon from '../../assets/email-icon.png'
import call_icon from '../../assets/call-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    const today = new Date();
  const formattedDate = today.toLocaleDateString('id-ID'); // hasilnya dd/mm/yyyy

  // Ubah jadi dd-mm-yyyy
  const [day, month, year] = formattedDate.split('/');
  const finalDate = `${day}-${month}-${year}`;

  document.getElementById("tanggal").value = finalDate;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setResult("Mengirim...");

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbz6ikcEHLyqoO6372xBYRMZek-tfWIoujOo-XVg0SD-T4ZhH6ol85N4sb2N5VjoY4fA/exec",{
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(() => {
        setResult("Data berhasil dikirim!");
        formEle.reset();
        document.getElementById("tanggal").value = new Date().toISOString().slice(0, 10);
      })
      .catch(error => {
        setResult("Terjadi kesalahan saat mengirim data.");
        console.error(error);
      });
  }

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Kirim pesan <img src={msg_icon} alt="" /></h3>
        <p>
          Silakan hubungi kami melalui formulir kontak atau temukan informasi kontak kami di bawah ini. Masukan, pertanyaan, dan saran Anda sangat berarti bagi kami untuk terus memberikan layanan laundry terbaik dan memuaskan.
        </p>
        <ul>
          <li><img src={email_icon} alt="" />danslaundry22@gmail.com</li>
          <li><img src={call_icon} alt="" /><a href="https://wa.me/6285183530453?text=Halo%20DANS%20Laundry%2C%20saya%20ingin%20order%20laundry.%0ANama%3A%20[Nama%20Anda]%0ANo.%20Telp%3A%20[Nomor%20Telepon]%0AAlamat%3A%20[Alamat%20Lengkap]" target="_blank">+62 818-0880-3109 (Wildan Y Z)</a></li>
          <li><img src={location_icon} alt="" />Cikarang, Bekasi</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit}>
          <label>Kritik</label>
          <textarea name='Kritik'id='Kritik' placeholder='Masukkan Kritik' cols="30" rows="2" required></textarea>
          <label>Saran</label>
          <textarea name='Saran' id='Saran' placeholder='Masukkan Saran' cols="30" rows="2" required></textarea>
          <input type="hidden" name="Tanggal_Kirim" id="tanggal" />
          <button type="submit" className='btn dark-btn'>Kirim</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
