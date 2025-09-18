import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Upload, Building2, Users } from 'lucide-react';

interface RoleSelectorModalProps {
  isOpen: boolean;
  onRoleSelect: (role: 'user' | 'provider') => void;
}

const RoleSelectorModal: React.FC<RoleSelectorModalProps> = ({ isOpen, onRoleSelect }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            What service are you looking for today?
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 py-4">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onRoleSelect('user')}>
            <CardContent className="p-6 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Book an Event/Venue</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Find and book the perfect venue or event for your needs
              </p>
              <Button className="w-full" variant="default">
                <Users className="h-4 w-4 mr-2" />
                Continue as Booker
              </Button>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onRoleSelect('provider')}>
            <CardContent className="p-6 text-center">
              <Upload className="h-12 w-12 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Upload Venue/Event</h3>
              <p className="text-muted-foreground text-sm mb-4">
                List your venue or event and start earning revenue
              </p>
              <Button className="w-full" variant="secondary">
                <Building2 className="h-4 w-4 mr-2" />
                Continue as Provider
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                *Requires verification
              </p>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleSelectorModal;