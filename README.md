# PolyLens: Polymer Latency Monitoring

## Team Members (VibeChain Dynamics)
- IbcFan
- eigenvibes

## Project Overview
PolyLens is a web3 application designed to monitor and analyze packet latency for Polymer channels, which are crucial for inter-chain communication. By providing a user-friendly interface, PolyLens enables developers to gain insights into the performance of their Polymer channels and set up alerts when latency exceeds specified thresholds.

## Run-book
To run PolyLens locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/IbcFan/polylens.git
   ```

2. Install dependencies:
   ```
   cd polylens
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file and rename it to `.env`. 
   - Fill out the required environment variables (e.g., API keys, database connection strings).
   - For [Clerk](clerk.com) and [Mailgun](https:/mailgun.com/), you can sign up for a free account and obtain the required credentials.
   - For Prisma, you can set up a local database or use a cloud-based solution like [Supabase](https://supabase.com/).

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

6. For email alerts to work, you need to set up a domain in Mailgun and verify it via DNS records.

7. Additionally, a cron service needs to be set up to periodically trigger an api to send emails.
Locally it can be done using a simple curl command:
```bash
curl http://localhost:3000/api/alerts 
```

## Resources Used
- **Next.js**: React framework for building server-side rendered and static web applications.
- **tRPC**: Library for building typesafe APIs with TypeScript.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **Clerk**: User authentication and management solution.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Recharts**: Composable charting library built on React components.
- **Mailgun**: Email service for sending latency alerts.
- **Vercel**: Cloud platform for Next.js sites and serverless functions.

## Challenges Faced
During the development of PolyLens, we encountered a few challenges:

1. Integrating with the Polymer ecosystem and understanding the intricacies of inter-chain communication.
2. Optimizing the performance of the latency graph to handle large datasets efficiently.
3. Ensuring a smooth user experience across different devices and screen sizes.
4. Creating a helpful UX for summarizing and understanding latency data.

We overcame these challenges by conducting thorough research, seeking guidance from the Polymer community, and iteratively refining our implementation based on user feedback.

## What We Learned
Through the development of PolyLens, our team gained valuable insights:

1. The importance of monitoring and analyzing latency in inter-chain communication for a seamless user experience.
2. The power of leveraging modern web technologies to build intuitive and responsive user interfaces.
3. The significance of collaborating effectively as a team and leveraging each member's strengths.

## Future Improvements
We have identified several areas for future enhancements to PolyLens:

1. Integrating with additional blockchain networks to expand the supported ecosystems.
2. Implementing advanced anomaly detection techniques to proactively identify latency issues.
3. Enhancing the alerting system with more notification channels (e.g., Slack, Discord, Telegram, etc.).
4. Improving latency metrics and trend measurements for more accurate insights.
5. Providing more fine-grained control over alerts to cater to specific user requirements.

## License
PolyLens is released under the [MIT License](https://opensource.org/licenses/MIT).

## Proof of testnet interaction
Thank you to the creators of [IBC App Solidity Template](https://github.com/open-ibc/ibc-app-solidity-template/tree/main?tab=readme-ov-file) for making it easy to send packets thru the testnet!
- [Send](https://optimism-sepolia.blockscout.com/tx/0xa90a9620ab16058312efa339b8d2d4b4d679d5afcf95cbde247f8540eeabed31)
- [Recv](https://base-sepolia.blockscout.com/tx/0xe58155076439d9a9e69cf252e4f58c32c5397dccd0235598e1c78c736f06de25)
- [Ack](https://optimism-sepolia.blockscout.com/tx/0x63f262afb792fa09d28f4b0562339b4a447e7f138b3fd9d3f0c4351b32d59f01)