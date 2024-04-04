import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from "@/components/ui/use-toast"


const AddLink: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const { toast } = useToast()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
        title: "Se guardo!",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    // try {
    //   const response = await fetch('URL_DEL_SERVICIO', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ url }), 
    //   });
  
    //   if (!response.ok) {
    //     throw new Error('Error al enviar los datos'); 
    //   }
  
    //   console.log('Datos enviados correctamente');
    //   setUrl(''); 
    // } catch (error) {
    //     if (error instanceof Error) {
    //       console.error('Error:', error.message); 
    //     } else {
    //       console.error('Error:', error); 
    //     }
    //   }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Nuevo Link</CardTitle>
          <CardDescription>Coloque el link que quiere recortar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="link">Url</Label>
              <Input
                id="link"
                placeholder="Url"
                required
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">
              Guardar
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default AddLink;
