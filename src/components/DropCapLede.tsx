/* The feature lede — its first letter becomes a large editorial-red drop cap
   (see the `.dropcap` component class). */
export function DropCapLede({ children }: { children: string }) {
  return <p className="dropcap measure font-body leading-[1.72]">{children}</p>
}
