"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

import styles from "./Contact.module.css";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function Contact() {

  const [
    status,
    setStatus,
  ] =
    useState<FormStatus>(
      "idle"
    );

  const [
    formData,
    setFormData,
  ] =
    useState({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    const {
      name,
      value,
    } = event.target;

    setFormData(
      (previous) => ({
        ...previous,

        [name]:
          value,
      })
    );

  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setStatus(
      "loading"
    );

    try {

      /*
       * We will connect this
       * to your backend API.
       *
       * Example:
       *
       * fetch(
       *   `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
       *   {
       *     method: "POST",
       *     headers: {
       *       "Content-Type":
       *         "application/json",
       *     },
       *     body:
       *       JSON.stringify(formData),
       *   }
       * );
       */

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            1500
          )
      );

      setStatus(
        "success"
      );

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });

    } catch {

      setStatus(
        "error"
      );

    }

  };

  return (
    <section
      id="contact"
      className={
        styles.contact
      }
    >

      <div
        className={
          styles.container
        }
      >

        {/* Header */}

        <div
          className={
            styles.header
          }
        >

          <span
            className={
              styles.eyebrow
            }
          >
            Let's Connect
          </span>

          <h2>
            Have a project
            <span>
              in mind?
            </span>
          </h2>

          <p>
            Whether you have an idea,
            a project, or simply want
            to talk about technology,
            I'd love to hear from you.
          </p>

        </div>

        {/* Form */}

        <div
          className={
            styles.formWrapper
          }
        >

          {status ===
          "success" ? (

            <div
              className={
                styles.success
              }
            >

              <CheckCircle
                size={48}
              />

              <h3>
                Message Sent
              </h3>

              <p>
                Thanks for reaching out.
                I'll get back to you
                as soon as possible.
              </p>

              <button
                type="button"
                onClick={() =>
                  setStatus(
                    "idle"
                  )
                }
              >
                Send Another Message
              </button>

            </div>

          ) : (

            <form
              onSubmit={
                handleSubmit
              }
            >

              <div
                className={
                  styles.row
                }
              >

                <div
                  className={
                    styles.field
                  }
                >

                  <label
                    htmlFor="name"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

                <div
                  className={
                    styles.field
                  }
                >

                  <label
                    htmlFor="email"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />

                </div>

              </div>

              <div
                className={
                  styles.field
                }
              >

                <label
                  htmlFor="projectType"
                >
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  value={
                    formData.projectType
                  }
                  onChange={
                    handleChange
                  }
                  required
                >

                  <option value="">
                    Select a project type
                  </option>

                  <option value="website">
                    Website Development
                  </option>

                  <option value="web-app">
                    Web Application
                  </option>

                  <option value="ecommerce">
                    E-commerce
                  </option>

                  <option value="backend">
                    Backend Development
                  </option>

                  <option value="consultation">
                    Consultation
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

              <div
                className={
                  styles.field
                }
              >

                <label
                  htmlFor="message"
                >
                  Tell Me About Your Project
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, goals, timeline, and anything else that might be useful..."
                  rows={7}
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  required
                />

              </div>

              {status ===
                "error" && (

                <p
                  className={
                    styles.error
                  }
                >
                  Something went wrong.
                  Please try again.
                </p>

              )}

              <button
                type="submit"
                disabled={
                  status ===
                  "loading"
                }
                className={
                  styles.submit
                }
              >

                {status ===
                "loading" ? (

                  <>
                    Sending

                    <Loader2
                      size={18}
                      className={
                        styles.spinner
                      }
                    />
                  </>

                ) : (

                  <>
                    Send Message

                    <ArrowUpRight
                      size={18}
                    />
                  </>

                )}

              </button>

            </form>

          )}

        </div>

      </div>

    </section>
  );
}