import { redirect } from 'next/navigation';

export default function SolutionPage() {
    // Doğrudan kullanıcı listesine yönlendir
    redirect('/day2/05-mini-project/solution/users');
}

