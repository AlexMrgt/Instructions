import {
  talePart_1,
  talePart_2,
  talePart_3,
  talePart_4,
  talePart_5,
  talePart_6,
  talePart_7,
  talePart_8,
  talePart_10,
  talePart_11,
  talePart_12,
  talePart_13,
  talePart_14,
  talePart_15,
  talePart_16,
  talePart_17,
  talePart_18,
  talePart_19,
  talePart_20,
  talePart_21,
  talePart_22,
  talePart_23,
} from "../shared/data/questions";
import "./Fairytale.css";

const Fairytale: React.FC = () => {
  const last =
    "Ну вот и все) Не профессиональная литература, но от всего сердца. Это писалось для тебя. Но ты и так это знаешь. И ты знаешь, что я твой миниатюрный рыцарь с большим сердцем. И хочется, чтобы ты была рядом, это желание сильно как никогда. Не могу не пытаться обратить твои чувства ко мне.";
  const last2 = "С пламенем в серцде, Morgot";

  function ran() {
    return Math.random();
  }

  return (
    <main className="main">
      {talePart_1.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}

      <p style={{ textAlign: "left" }}>***</p>

      {talePart_2.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}

      <p style={{ textAlign: "left" }}>***</p>

      {talePart_3.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}

      <p style={{ textAlign: "left" }}>***</p>

      {talePart_4.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>

      {talePart_5.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_6.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_7.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_8.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_10.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_11.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_12.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_13.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_14.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_15.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_16.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_17.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_18.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}

      <p style={{ textAlign: "left" }}>***</p>
      {talePart_19.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_20.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_21.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_22.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}
      <p style={{ textAlign: "left" }}>***</p>
      {talePart_23.map((item, index) => (
        <p className="f__text" key={index}>
          {item}
        </p>
      ))}

      <p style={{ textAlign: "left" }}>***</p>

      <p className="other">{last}</p>

      <p className="other">{last2}</p>
    </main>
  );
};

export default Fairytale;
