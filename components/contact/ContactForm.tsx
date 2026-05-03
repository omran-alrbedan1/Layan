'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { User, Phone, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface ContactFormState {
  name: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createValidationSchema = () => {
    return z.object({
      name: z.string().min(1, t('form.validation.nameRequired')),
      phone: z.string().min(1, t('form.validation.phoneRequired')),
      message: z.string().min(10, t('form.validation.messageMin')),
    });
  };

  const form = useForm<ContactFormState>({
    resolver: zodResolver(createValidationSchema()),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormState) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success(t("form.success"));
        form.reset();
      } else {
        toast.error(responseData.message || t("form.error"));
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(t("form.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        {/* Name Field - Required */}
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1">
              <FormLabel 
                htmlFor={field.name}
                className="text-xs uppercase tracking-[0.25em] text-gray-500"
              >
                {t("form.name")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" aria-hidden="true" />
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder={t("form.namePlaceholder")}
                    className="pl-10 h-10 w-full"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Phone Field - Required */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1">
              <FormLabel 
                htmlFor={field.name}
                className="text-xs uppercase tracking-[0.25em] text-gray-500"
              >
                {t("form.phone")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" aria-hidden="true" />
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    className="pl-10 h-10 w-full"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Message Field - Required */}
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1">
              <FormLabel 
                htmlFor={field.name}
                className="text-xs uppercase tracking-[0.25em] text-gray-500"
              >
                {t("form.message")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-primary w-4 h-4" aria-hidden="true" />
                  <textarea
                    {...field}
                    id={field.name}
                    rows={4}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-sm"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-3 items-center pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-semibold uppercase tracking-widest py-2.5 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? t("form.sending") : t("form.submit")}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-semibold uppercase tracking-widest rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("form.reset")}
          </button>
        </div>
      </form>
    </Form>
  );
}