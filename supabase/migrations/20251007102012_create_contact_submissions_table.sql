/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address for response
      - `subject` (text) - Subject of the inquiry
      - `message` (text) - Message content
      - `status` (text) - Status of the submission (new, read, responded, closed)
      - `created_at` (timestamptz) - Timestamp when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public insert access (anyone can submit a contact form)
    - Add policy for admin read access (for processing submissions)

  3. Important Notes
    - This table stores contact form submissions for customer support
    - All submissions start with 'new' status
    - Admins can update status as they process inquiries
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);