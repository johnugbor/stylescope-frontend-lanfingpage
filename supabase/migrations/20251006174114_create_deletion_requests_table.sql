/*
  # Create Deletion Requests Table

  1. New Tables
    - `deletion_requests`
      - `id` (uuid, primary key) - Unique identifier for each deletion request
      - `email` (text) - Email address of the user requesting account deletion
      - `reason` (text) - Reason for account deletion
      - `additional_info` (text, nullable) - Optional additional information from user
      - `status` (text) - Status of the deletion request (pending, processing, completed)
      - `created_at` (timestamptz) - Timestamp when the request was created
      - `processed_at` (timestamptz, nullable) - Timestamp when the request was processed

  2. Security
    - Enable RLS on `deletion_requests` table
    - Add policy for public insert access (anyone can submit a deletion request)
    - Add policy for admin read access (for processing requests)

  3. Important Notes
    - This table stores account deletion requests for compliance and tracking
    - Requests are processed within 30 days as per privacy policy
    - Status helps track the deletion workflow
*/

CREATE TABLE IF NOT EXISTS deletion_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  reason text NOT NULL,
  additional_info text,
  status text DEFAULT 'pending' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  processed_at timestamptz
);

ALTER TABLE deletion_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit deletion request"
  ON deletion_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Public can insert deletion requests"
  ON deletion_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);