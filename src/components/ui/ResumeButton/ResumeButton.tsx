import { Download } from "lucide-react";

import styles from "./ResumeButton.module.css";

type ResumeButtonProps = {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

export default function ResumeButton({
  variant = "primary",
  children = "Download Resume",
}: ResumeButtonProps) {
  return (
    <a
      href="/resume/Godwin-Chinkwe-Resume.pdf"
      download
      className={`${styles.button} ${styles[variant]}`}
    >
      <span>{children}</span>

      <Download size={17} />
    </a>
  );
}
