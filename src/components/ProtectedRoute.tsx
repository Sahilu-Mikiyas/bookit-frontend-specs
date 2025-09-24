import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePartner?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requirePartner = false }) => {
  const { isAuthenticated, isPartnerApproved } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (requirePartner && !isPartnerApproved) {
      navigate('/partner-application');
      return;
    }
  }, [isAuthenticated, isPartnerApproved, requirePartner, navigate]);

  if (!isAuthenticated || (requirePartner && !isPartnerApproved)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;