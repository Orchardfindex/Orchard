import React from 'react'
import useTheme from 'hooks/useTheme'

function MoneyBag({ size, color }: { size?: number; color?: string }) {
  const theme = useTheme()
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 14.8594C11.6123 14.8594 11.2969 14.544 11.2969 14.1562C11.2969 13.873 11.4654 13.6187 11.7262 13.5082C12.0411 13.3749 12.4178 13.4887 12.7602 13.8203C13.0391 14.0905 13.4842 14.0835 13.7544 13.8046C14.0247 13.5257 14.0176 13.0806 13.7387 12.8104C13.4213 12.5029 13.0684 12.2855 12.7031 12.1628V11.3438C12.7031 10.9554 12.3883 10.6406 12 10.6406C11.6117 10.6406 11.2969 10.9554 11.2969 11.3438V12.1674C11.257 12.1816 11.2172 12.1966 11.1778 12.2133C10.3959 12.5445 9.89062 13.3071 9.89062 14.1562C9.89062 15.3194 10.8369 16.2656 12 16.2656C12.3877 16.2656 12.7031 16.581 12.7031 16.9688C12.7031 17.2634 12.5173 17.5291 12.2407 17.6298C11.8795 17.7613 11.4591 17.583 11.0872 17.1402C10.8375 16.8428 10.394 16.8043 10.0966 17.054C9.79926 17.3038 9.76069 17.7473 10.0104 18.0446C10.3905 18.4972 10.833 18.8076 11.2969 18.9637V19.7812C11.2969 20.1696 11.6117 20.4844 12 20.4844C12.3884 20.4844 12.7032 20.1696 12.7032 19.7812V18.9575C12.7095 18.9553 12.7157 18.9534 12.722 18.9511C13.5518 18.6489 14.1094 17.8522 14.1094 16.9688C14.1094 15.8056 13.1631 14.8594 12 14.8594Z"
        fill={color || theme.primary}
      />
      <path
        d="M18.5118 10.559C17.6761 9.53091 16.7208 8.71181 15.6721 8.12278C15.8439 7.91958 15.9794 7.68131 16.0669 7.41577C16.4103 6.37003 15.9087 5.12784 14.6284 4.72317L16.4232 1.59356C16.6497 1.19859 16.4462 0.695531 16.0096 0.568594C14.7119 0.191297 13.3629 0 12 0C10.6371 0 9.28809 0.191297 7.99041 0.568594C7.55325 0.695672 7.35061 1.19906 7.57678 1.59356L9.37158 4.72322C8.09634 5.12583 7.58841 6.36619 7.93327 7.41633C8.0205 7.68117 8.15597 7.9193 8.32823 8.12259C7.27941 8.71163 6.324 9.53081 5.48822 10.559C3.81755 12.6143 2.85938 15.2069 2.85938 17.6719C2.85938 22.7855 6.9397 24 12 24C17.0639 24 21.1406 22.7835 21.1406 17.6719C21.1406 15.2069 20.1825 12.6143 18.5118 10.559ZM9.25763 1.69772C10.1547 1.50408 11.0737 1.40625 12 1.40625C12.9263 1.40625 13.8453 1.50408 14.7424 1.69772L13.194 4.39781C12.4009 4.28709 11.5994 4.28714 10.8061 4.39786L9.25763 1.69772ZM9.717 6.08887C10.9271 5.69194 12.1931 5.6167 13.4239 5.86275C13.4253 5.86303 13.4268 5.86331 13.4283 5.86359C13.7152 5.92116 14.0001 5.99606 14.282 6.08855C14.6505 6.21 14.8519 6.60858 14.7311 6.97641C14.6433 7.2428 14.4115 7.42627 14.1388 7.45598C13.4377 7.23647 12.7227 7.125 12 7.125C11.2788 7.125 10.5651 7.236 9.86541 7.45463C9.58852 7.42613 9.35616 7.24134 9.26911 6.97706C9.14812 6.60858 9.3495 6.20995 9.717 6.08887ZM12 22.6031C6.50644 22.6031 4.26562 21.1678 4.26562 17.6719C4.26562 15.5558 5.13061 13.2285 6.57938 11.446C8.10727 9.56639 10.0323 8.53125 12 8.53125C14.1659 8.53125 16.0604 9.77259 17.4206 11.446C18.8694 13.2285 19.7344 15.5558 19.7344 17.6719C19.7344 21.1678 17.4936 22.6031 12 22.6031Z"
        fill={color || theme.primary}
      />
    </svg>
  )
}

export default MoneyBag
