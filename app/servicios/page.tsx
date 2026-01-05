import React from 'react';
import rawServices from '../../data/servicios.json';
import WhatsAppButton from '../../components/WhatsAppButton';
import Card from '../../components/Card';
import Grid from '../../components/Grid';
import { buildServiceMessage } from '../../lib/whatsapp';
import { mapRawServices } from '../../lib/transform';
import { validateData, shouldValidateAtRuntime } from '../../lib/validate';
import { siteConfig } from '../../lib/config';

if (shouldValidateAtRuntime()) validateData('servicios.json', rawServices, { throwOnError: true });

export default function ServiciosPage() {
  const services = mapRawServices(rawServices);
  const PHONE_NUMBER = siteConfig.phone;

  return (
    <section>
      <h1>Servicios</h1>
      <Grid>
        {services.map((s) => (
          <Card key={s.id} title={s.title} image={s.image} status={s.status}>
            <p>{s.description}</p>
            {s.price && <p><strong>{s.price}</strong></p>}
            <div style={{ marginTop: '1rem' }}>
              <WhatsAppButton 
                phone={PHONE_NUMBER} 
                messageBuilder={() => buildServiceMessage(s)}
              >
                Consultar
              </WhatsAppButton>
            </div>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
